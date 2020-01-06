import React, { Component, Fragment } from 'react'
import NavBarComponent from '../../components/navBar/navBar'
import Card from 'react-bootstrap/Card'
import { Link} from "react-router-dom";
import {getAllGamesOnline, getAllGamesIA} from '../../methods/fetch'
import othelloPicture from "../../assets/othello.jpg"
import axios from 'axios'
import moment from 'moment'
import './dashboard.css'
moment.locale('fr')
class Dashboard extends Component {
 
  componentDidMount(){
    axios.all([getAllGamesOnline(), getAllGamesIA(), ])
    .then(axios.spread((games, gamesIA, programmes) => {

      return this.setState({ games: games.data, gamesIA: gamesIA.data })
    }))
// axios.get("http://localhost:9000/api/games/").then(res => this.setState({games:res.data}),
// axios.get("http://localhost:9000/api/games/ia").then(res => this.setState({gamesIA:res.data})
  }
  render() {
console.log(this.state)
console.log(this.state ?this.state.gamesIA.length >4: 'attend')
    return (
      <Fragment>
        <NavBarComponent/>
 
     <p className="create-style">
    <Link to="/home" className="link-exit">Créer une partie</Link>   
     </p>
 <div className="col-md-12 col-sm-12 col-xs-12  d-flex login-page-style   ">

        <article className="col-md-6 col-sm-12 col-xs-12 mt-5 d-flex section-game-style" style={{border: "1px solid gray"}}>

   
  
   
        <section className="col-md-12 col-sm-12 col-xs-12     " >
        <p  className=" col-md-12 col-sm-12 col-xs-12  single-game">Liste des parties disponible en IA</p>
        <div className=" d-flex login-page-style">
            {this.state && this.state.gamesIA.length !== 0 && this.state.gamesIA !== null ? 
                  this.state.gamesIA.map((el) => {
                    return (
                        <section className="col-md-6 col-sm-12 col-xs-12 mt-3   ">
                          <header>
                          {!el.saveScorePlayer1 && !el.saveScoreIA ? <span>Match pas encore commencé</span>     :null}
                          {el.saveScorePlayer1 ? <span> Scores: vous:&nbsp;{el.saveScorePlayer1},</span> : ''} &nbsp;
                          {el.saveScoreIA ?<span>IA:&nbsp; {el.saveScoreIA}</span> : ''}
  </header>
                        <Card className={ el.saveWinners === "O"   ||el.saveWinners === "XO"  ? "bg-danger text-white" : el.saveWinners === "X" ? "bg-success text-white " :"bg-primary text-white"  }>
                        <Card.Title>{el.name}</Card.Title>
           
                        <Card.Img src={othelloPicture} alt="Card image othello" />
                        
                     
       
                        <Card.Body>
                          <span></span>Crée le &nbsp;
                     { moment(el.date).format('DD-MM-YYYY')}
                     </Card.Body>
              
                        <Card.Footer>
                          {el.saveWinners !== '' || el.saveWinners !== null ? el.saveWinners === "O" ? "Perdu" : ''  || el.saveWinners === "X" ? "Gagner!" : '' ||el.saveWinners === "XO" ? "Match null" : '': ''} 
                          {el.saveWinners === "O"  || el.saveWinners === "X"  ||el.saveWinners === "XO"  ? '' :
            <Link to={{pathname:`/${el._id}`, state: {fromId: true}}}  className="single-player-link">{!el.saveScorePlayer1 && !el.saveScoreIA ? 'Commencer':'Reprendre la partie' }</Link>}
                          </Card.Footer>
                      </Card>
                        
                      
                      
                          </section>
                  
                    )
                  })
                
                
                : <p>Veuillez créer une partie avant de démarrer</p>}
                </div>
       </section>
        </article>
        <article className="col-md-6 col-sm-12 col-xs-12 mt-5 d-flex login-page-style" style={{border: "1px solid gray"}}>




<section className="col-md-12 col-sm-12 col-xs-12     " >
<p  className=" col-md-12 col-sm-12 col-xs-12  online-game">Liste des parties disponible en ligne</p>
<div className=" d-flex login-page-style">

    {this.state && this.state.games.length !== 0 && this.state.games !== null ? 
          this.state.games.map((el) => {
            return (
                <section className="col-md-6 col-sm-12 col-xs-12  mt-3    ">


                <Card className="bg-secondary text-white">
                <Card.Title>{el.name}</Card.Title>
   
                <Card.Img src={othelloPicture} alt="Card image othello" />
                
                <Card.Body>Crée le &nbsp;
             { moment(el.date).format('DD-MM-YYYY')}
             </Card.Body>
                <Card.Footer>
                  <Link to={`/othello/${el._id}`} className="single-player-link">Rejoindre</Link>
                  </Card.Footer>
              </Card>
                
              
              
                  </section>
          
            )
          })
        
        
        : <p>Pas de partie multijoueur disponible. Veuillez créer une partie</p>}
        </div>
</section>
</article>
        </div>
      </Fragment>
    )
  }
}
export default Dashboard