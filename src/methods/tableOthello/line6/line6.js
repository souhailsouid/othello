import React from 'react'

import pieceBlack from "../../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../../assets/Chips/chipWhite.png"
export const onClickL6C1 = (state, updateState) => {
  updateState({ L6C1: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 41, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL6C2 = (state, updateState) => {
  updateState({ L6C2: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 42, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL6C3 = (state, updateState) => {
  updateState({ L6C3: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 43, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL6C4 = (state, updateState) => {
  updateState({ L6C4: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 44, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL6C5 = (state, updateState) => {
  updateState({ L6C5: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 45, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL6C6 = (state, updateState) => {
  updateState({ L6C6: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 46, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL6C7 = (state, updateState) => {
  updateState({ L6C7: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 47, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL6C8 = (state, updateState) => {
  updateState({ L6C8: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 48, color: state.player1 === 1 ? "black" : "white" })
}