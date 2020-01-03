import React from 'react'

import pieceBlack from "../../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../../assets/Chips/chipWhite.png"
export const onClickL7C1 = (state, updateState) => {
  updateState({ L7C1: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 49, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL7C2 = (state, updateState) => {
  updateState({ L7C2: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 50, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL7C3 = (state, updateState) => {
  updateState({ L7C3: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 51, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL7C4 = (state, updateState) => {
  updateState({ L7C4: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 52, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL7C5 = (state, updateState) => {
  updateState({ L7C5: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 53, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL7C6 = (state, updateState) => {
  updateState({ L7C6: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 54, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL7C7 = (state, updateState) => {
  updateState({ L7C7: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 55, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL7C8 = (state, updateState) => {
  updateState({ L7C8: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 56, color: state.player1 === 1 ? "black" : "white" })
}