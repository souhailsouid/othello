import React from 'react'

import pieceBlack from "../../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../../assets/Chips/chipWhite.png"
export const onClickL3C1 = (state, updateState) => {
  updateState({ L3C1: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 17, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL3C2 = (state, updateState) => {
  updateState({ L3C2: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 18, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL3C3 = (state, updateState) => {
  updateState({ L3C3: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 19, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL3C4 = (state, updateState) => {
  updateState({ L3C4: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 20, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL3C5 = (state, updateState) => {
  updateState({ L3C5: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 21, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL3C6 = (state, updateState) => {
  updateState({ L3C6: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 22, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL3C7 = (state, updateState) => {
  updateState({ L3C7: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 23, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL3C8 = (state, updateState) => {
  updateState({ L3C8: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 24, color: state.player1 === 1 ? "black" : "white" })
}