import React from 'react'

import pieceBlack from "../../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../../assets/Chips/chipWhite.png"
export const onClickL5C1 = (state, updateState) => {
  updateState({ L5C1: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 33, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL5C2 = (state, updateState) => {
  updateState({ L5C2: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 34, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL5C3 = (state, updateState) => {
  updateState({ L5C3: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 35, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL5C4 = (state, updateState) => {
  updateState({ L5C4: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 36, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL5C5 = (state, updateState) => {
  updateState({ L5C5: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 37, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL5C6 = (state, updateState) => {
  updateState({ L5C6: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 38, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL5C7 = (state, updateState) => {
  updateState({ L5C7: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 39, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL5C8 = (state, updateState) => {
  updateState({ L5C8: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 40, color: state.player1 === 1 ? "black" : "white" })
}