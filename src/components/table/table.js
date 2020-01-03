import React, { Component, Fragment } from 'react'
import pieceBlack from "../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../assets/Chips/chipWhite.png"
// import { onClickL1C1, OnClickLine2Case1 } from '../../methods/piece'
import *as line1 from '../../methods/tableOthello/line1/line1'
import *as line2 from '../../methods/tableOthello/line2/line2'
import *as line3 from '../../methods/tableOthello/line3/line3'
import *as line4 from '../../methods/tableOthello/line4/line4'
import *as line5 from '../../methods/tableOthello/line5/line5'
import *as line6 from '../../methods/tableOthello/line6/line6'
import *as line7 from '../../methods/tableOthello/line7/line7'
import *as line8 from '../../methods/tableOthello/line8/line8'

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
    console.log(this.state)
    console.log(this.state.L1C1)
    console.log(this.state.L1C1 === undefined)
    console.log(typeof this.state.L1C1)
    return (
      <div className="col-md-12 col-sm-12 col-xs-12 mt-5 d-flex game-page-style ">
        <section className="col-md-6 col-sm-12 col-xs-12 mt-5" >
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
              <td onClick={() => line2.onClickL2C1(this.state, this.setState.bind(this))}>{this.state.L2C1 ? this.state.L2C1 : ''}</td>
              <td onClick={() => line2.onClickL2C2(this.state, this.setState.bind(this))}>{this.state.L2C2 ? this.state.L2C2 : ''}</td>
              <td onClick={() => line2.onClickL2C3(this.state, this.setState.bind(this))}>{this.state.L2C3 ? this.state.L2C3 : ''}</td>
              <td onClick={() => line2.onClickL2C4(this.state, this.setState.bind(this))}>{this.state.L2C4 ? this.state.L2C4 : ''}</td>
              <td onClick={() => line2.onClickL2C5(this.state, this.setState.bind(this))}>{this.state.L2C5 ? this.state.L2C5 : ''}</td>
              <td onClick={() => line2.onClickL2C6(this.state, this.setState.bind(this))}>{this.state.L2C6 ? this.state.L2C6 : ''}</td>
              <td onClick={() => line2.onClickL2C7(this.state, this.setState.bind(this))}>{this.state.L2C7 ? this.state.L2C7 : ''}</td>
              <td onClick={() => line2.onClickL2C8(this.state, this.setState.bind(this))}>{this.state.L2C8 ? this.state.L2C8 : ''}</td>
            </tr>
            <tr>
              <td onClick={() => line3.onClickL3C1(this.state, this.setState.bind(this))}>{this.state.L3C1 ? this.state.L3C1 : ''}</td>
              <td onClick={() => line3.onClickL3C2(this.state, this.setState.bind(this))}>{this.state.L3C2 ? this.state.L3C2 : ''}</td>
              <td onClick={() => line3.onClickL3C3(this.state, this.setState.bind(this))}>{this.state.L3C3 ? this.state.L3C3 : ''}</td>
              <td onClick={() => line3.onClickL3C4(this.state, this.setState.bind(this))}>{this.state.L3C4 ? this.state.L3C4 : ''}</td>
              <td onClick={() => line3.onClickL3C5(this.state, this.setState.bind(this))}>{this.state.L3C5 ? this.state.L3C5 : ''}</td>
              <td onClick={() => line3.onClickL3C6(this.state, this.setState.bind(this))}>{this.state.L3C6 ? this.state.L3C6 : ''}</td>
              <td onClick={() => line3.onClickL3C7(this.state, this.setState.bind(this))}>{this.state.L3C7 ? this.state.L3C7 : ''}</td>
              <td onClick={() => line3.onClickL3C8(this.state, this.setState.bind(this))}>{this.state.L3C8 ? this.state.L3C8 : ''}</td>
            </tr>
            <tr>
              <td onClick={() => line4.onClickL4C1(this.state, this.setState.bind(this))}>{this.state.L4C1 ? this.state.L4C1 : ''}</td>
              <td onClick={() => line4.onClickL4C2(this.state, this.setState.bind(this))}>{this.state.L4C2 ? this.state.L4C2 : ''}</td>
              <td onClick={() => line4.onClickL4C3(this.state, this.setState.bind(this))}>{this.state.L4C3 ? this.state.L4C3 : ''}</td>
              <td> <img src={pieceBlack} alt="piece-black" id="28" /></td>
              <td> <img src={pieceWhite} alt="piece-white" id="29" /></td>
              <td onClick={() => line4.onClickL4C6(this.state, this.setState.bind(this))}>{this.state.L4C6 ? this.state.L4C6 : ''}</td>
              <td onClick={() => line4.onClickL4C7(this.state, this.setState.bind(this))}>{this.state.L4C7 ? this.state.L4C7 : ''}</td>
              <td onClick={() => line4.onClickL4C8(this.state, this.setState.bind(this))}>{this.state.L4C8 ? this.state.L4C8 : ''}</td>
            </tr>
            <tr>
              <td onClick={() => line5.onClickL5C1(this.state, this.setState.bind(this))}>{this.state.L5C1 ? this.state.L5C1 : ''}</td>
              <td onClick={() => line5.onClickL5C2(this.state, this.setState.bind(this))}>{this.state.L5C2 ? this.state.L5C2 : ''}</td>
              <td onClick={() => line5.onClickL5C3(this.state, this.setState.bind(this))}>{this.state.L5C3 ? this.state.L5C3 : ''}</td>
              <td > <img src={pieceWhite} alt="piece-white" id="36" /></td>
              <td> <img src={pieceBlack} alt="piece-black" id="37" /></td>
              <td onClick={() => line5.onClickL5C6(this.state, this.setState.bind(this))}>{this.state.L5C6 ? this.state.L5C6 : ''}</td>
              <td onClick={() => line5.onClickL5C7(this.state, this.setState.bind(this))}>{this.state.L5C7 ? this.state.L5C7 : ''}</td>
              <td onClick={() => line5.onClickL5C8(this.state, this.setState.bind(this))}>{this.state.L5C8 ? this.state.L5C8 : ''}</td>
            </tr>
            <tr>
              <td onClick={() => line6.onClickL6C1(this.state, this.setState.bind(this))}>{this.state.L6C1 ? this.state.L6C1 : ''}</td>
              <td onClick={() => line6.onClickL6C2(this.state, this.setState.bind(this))}>{this.state.L6C2 ? this.state.L6C2 : ''}</td>
              <td onClick={() => line6.onClickL6C3(this.state, this.setState.bind(this))}>{this.state.L6C3 ? this.state.L6C3 : ''}</td>
              <td onClick={() => line6.onClickL6C4(this.state, this.setState.bind(this))}>{this.state.L6C4 ? this.state.L6C4 : ''}</td>
              <td onClick={() => line6.onClickL6C5(this.state, this.setState.bind(this))}>{this.state.L6C5 ? this.state.L6C5 : ''}</td>
              <td onClick={() => line6.onClickL6C6(this.state, this.setState.bind(this))}>{this.state.L6C6 ? this.state.L6C6 : ''}</td>
              <td onClick={() => line6.onClickL6C7(this.state, this.setState.bind(this))}>{this.state.L6C7 ? this.state.L6C7 : ''}</td>
              <td onClick={() => line6.onClickL6C8(this.state, this.setState.bind(this))}>{this.state.L6C8 ? this.state.L6C8 : ''}</td>
            </tr>
            <tr>
              <td onClick={() => line7.onClickL7C1(this.state, this.setState.bind(this))}>{this.state.L7C1 ? this.state.L7C1 : ''}</td>
              <td onClick={() => line7.onClickL7C2(this.state, this.setState.bind(this))}>{this.state.L7C2 ? this.state.L7C2 : ''}</td>
              <td onClick={() => line7.onClickL7C3(this.state, this.setState.bind(this))}>{this.state.L7C3 ? this.state.L7C3 : ''}</td>
              <td onClick={() => line7.onClickL7C4(this.state, this.setState.bind(this))}>{this.state.L7C4 ? this.state.L7C4 : ''}</td>
              <td onClick={() => line7.onClickL7C5(this.state, this.setState.bind(this))}>{this.state.L7C5 ? this.state.L7C5 : ''}</td>
              <td onClick={() => line7.onClickL7C6(this.state, this.setState.bind(this))}>{this.state.L7C6 ? this.state.L7C6 : ''}</td>
              <td onClick={() => line7.onClickL7C7(this.state, this.setState.bind(this))}>{this.state.L7C7 ? this.state.L7C7 : ''}</td>
              <td onClick={() => line7.onClickL7C8(this.state, this.setState.bind(this))}>{this.state.L7C8 ? this.state.L7C8 : ''}</td>
            </tr>
            <tr>
              <td onClick={() => line8.onClickL8C1(this.state, this.setState.bind(this))}>{this.state.L8C1 ? this.state.L8C1 : ''}</td>
              <td onClick={() => line8.onClickL8C2(this.state, this.setState.bind(this))}>{this.state.L8C2 ? this.state.L8C2 : ''}</td>
              <td onClick={() => line8.onClickL8C3(this.state, this.setState.bind(this))}>{this.state.L8C3 ? this.state.L8C3 : ''}</td>
              <td onClick={() => line8.onClickL8C4(this.state, this.setState.bind(this))}>{this.state.L8C4 ? this.state.L8C4 : ''}</td>
              <td onClick={() => line8.onClickL8C5(this.state, this.setState.bind(this))}>{this.state.L8C5 ? this.state.L8C5 : ''}</td>
              <td onClick={() => line8.onClickL8C6(this.state, this.setState.bind(this))}>{this.state.L8C6 ? this.state.L8C6 : ''}</td>
              <td onClick={() => line8.onClickL8C7(this.state, this.setState.bind(this))}>{this.state.L8C7 ? this.state.L8C7 : ''}</td>
              <td onClick={() => line8.onClickL8C8(this.state, this.setState.bind(this))}>{this.state.L8C8 ? this.state.L8C8 : ''}</td>
            </tr>

          </table>
        </section>
        <section className="col-md-4 col-sm-12 col-xs-12 mt-5 panel-style" >


          {this.state.color === "black" || this.state.color === "" ?
            <img src={pieceBlack} alt="piece-black" className="piece" /> : <img src={pieceWhite} alt="piece-white" className="piece" />}
          <button>Passer </button>
        </section>
      </div>

    )
  }
}
export default Table