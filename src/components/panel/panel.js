import React, { Component } from 'react'
import Table from '../table/table'
import pieceBlack from "../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../assets/Chips/chipWhite.png"
// import { colorPiece } from '../../methods/piece'
import *as line1 from '../../methods/tableOthello/line1/line1'
import io from "socket.io-client";
import './panel.css'
class Panel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player1: 1,
      response: false,
      messages: [],
      color: ''

    }
    this.sendMessage = this.sendMessage.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    this.setState({ color: <img src={pieceBlack} alt="piece-black" /> })
  }
  componentDidMount() {

    this.socket = io("http://localhost:9000");

    this.socket.on("message", (message) => this.setState({ messages: [message, ...this.state.messages] }));
    console.log(this.state.response)
  }
  sendMessage(event) {
    const body = event.target.value
    if (event.keyCode === 13 && body) {
      let message = {
        body,
        from: 'Player1'
      }
      console.log("here", message)
      this.setState({ messages: [message, ...this.state.messages] })
      this.socket.emit("message", message)
    }
  }
  render() {
    const { response } = this.state;
    console.log(this.state)

    return (
      <article className="col-md-12 col-sm-12 col-xs-12 d-flex game-page-style">

        <Table />

        <section className="col-md-2 col-sm-12 col-xs-12 mt-5  panel-style">


          <input type="text" placeholder="miaou" onKeyUp={this.sendMessage}></input>
          {this.state.messages.map((message) => {
            return (
              <p>{message.body}  from {message.from}</p>
            )
          })}

        </section>
      </article>
    )
  }
}
export default Panel