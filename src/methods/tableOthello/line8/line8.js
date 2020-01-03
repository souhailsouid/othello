import React from 'react'

import pieceBlack from "../../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../../assets/Chips/chipWhite.png"
export const onClickL8C1 = (state, updateState) => {
  updateState({ L8C1: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 57, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL8C2 = (state, updateState) => {
  updateState({ L8C2: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 58, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL8C3 = (state, updateState) => {
  updateState({ L8C3: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 59, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL8C4 = (state, updateState) => {
  updateState({ L8C4: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 60, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL8C5 = (state, updateState) => {
  updateState({ L8C5: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 61, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL8C6 = (state, updateState) => {
  updateState({ L8C6: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 62, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL8C7 = (state, updateState) => {
  updateState({ L8C7: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 63, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL8C8 = (state, updateState) => {
  updateState({ L8C8: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 64, color: state.player1 === 1 ? "black" : "white" })
}