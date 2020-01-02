import React, { Component } from 'react'
import pieceBlack from "../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../assets/Chips/chipWhite.png"
// import { onClickL1C1, OnClickLine2Case1 } from '../../methods/piece'
import *as line1 from '../../methods/tableOthello/line1/line1'
import * as myFns from '../../methods/piece'
import './table.css'
class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '',
      player1: 1
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({ color: <img src={pieceBlack} alt="piece-black" /> })
  }
  render() {
    console.log(this.state.player1)

    console.log(this.state.L1C1)
    console.log(this.state.L1C1 === undefined)
    console.log(typeof this.state.L1C1)
    return (
      <section className="col-md-6 col-sm-12 col-xs-12 mt-5 ">
        <table>
          <tr >
            <td onClick={() => line1.onClickL1C1(this.state, this.setState.bind(this))}>{this.state.L1C1 ? this.state.L1C1 : ''}</td>
            <td onClick={() => line1.onClickL1C2(this.state, this.setState.bind(this))}>{this.state.L1C2 ? this.state.L1C2 : ''}</td>
            <td onClick={() => line1.onClickL1C3(this.state, this.setState.bind(this))}>{this.state.L1C3 ? this.state.L1C3 : ''}</td>
            <td onClick={() => line1.onClickL1C4(this.state, this.setState.bind(this))}>{this.state.L1C4 ? this.state.L1C4 : ''}</td>
            <td onClick={() => line1.onClickL1C5(this.state, this.setState.bind(this))}>{this.state.L1C5 ? this.state.L1C5 : ''}</td>
            <td onClick={() => line1.onClickL1C6(this.state, this.setState.bind(this))}>{this.state.L1C6 ? this.state.L1C6 : ''}</td>
            <td onClick={() => line1.onClickL1C7(this.state, this.setState.bind(this))}>{this.state.L1C7 ? this.state.L1C7 : ''}</td>
            <td onClick={() => line1.onClickL1C8(this.state, this.setState.bind(this))}>{this.state.L1C8 ? this.state.L1C8 : ''}</td>
          </tr>
          <tr>
            <td onClick={() => myFns.OnClickLine2Case1(this.state, this.setState.bind(this))}>{this.state.Line2Case1 ? this.state.Line2Case1 : ''}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td> <img src={pieceBlack} alt="piece-black" /></td>
            <td> <img src={pieceWhite} alt="piece-white" /></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td> <img src={pieceWhite} alt="piece-white" /></td>
            <td> <img src={pieceBlack} alt="piece-black" /></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

        </table>




      </section >

    )
  }
}
export default Table