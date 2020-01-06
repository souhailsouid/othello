import React, { Component, Fragment } from 'react'
import NavBarComponent from '../../components/navBar/navBar'
import { Link} from "react-router-dom";
import SinglePlayer from '../../components/mode/singlePlayer/singlePlayer'
import MultiPlayer from '../../components/mode/multiPlayer/multiPlayer'
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
import './home.css'
class Home extends Component {

  componentDidMount(){
axios.get("http://localhost:9000/api/users/").then(res => console.log(res))
  }
  render() {


    return (
      <Fragment>
        <NavBarComponent/>
        <p className="exit-style">
    <Link to="/dashboard" className="link-exit">Revenir sur la page acceuil</Link>   
     </p>
        <h1 className="mt-3">Choisir votre mode de jeu</h1>

    <section className="col-md-12 col-sm-12 col-xs-12 mt-5   ">
          <Alert variant="danger"  className="col-md-4 col-sm-12 col-xs-12 notification-multi-player"     dismissible>
<p>Pas de partie multi-joueur disponible.</p>

</Alert>
          </section>
        <article className="col-md-12 col-sm-12 col-xs-12 d-flex login-page-style">
          <SinglePlayer />
   
          <MultiPlayer />
        </article>

      </Fragment>
    )
  }
}
export default Home