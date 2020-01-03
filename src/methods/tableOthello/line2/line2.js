import React from 'react'

import pieceBlack from "../../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../../assets/Chips/chipWhite.png"
export const onClickL2C1 = (state, updateState) => {
  updateState({ L2C1: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 9, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL2C2 = (state, updateState) => {
  updateState({ L2C2: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 10, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL2C3 = (state, updateState) => {
  updateState({ L2C3: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 11, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL2C4 = (state, updateState) => {
  updateState({ L2C4: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 12, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL2C5 = (state, updateState) => {
  updateState({ L2C5: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 13, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL2C6 = (state, updateState) => {
  updateState({ L2C6: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 14, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL2C7 = (state, updateState) => {
  updateState({ L2C7: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 15, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL2C8 = (state, updateState) => {
  updateState({ L2C8: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 16, color: state.player1 === 1 ? "black" : "white" })
}