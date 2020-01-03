import React from 'react'

import pieceBlack from "../../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../../assets/Chips/chipWhite.png"
export const onClickL1C1 = (state, updateState) => {
  updateState({ L1C1: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 1, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL1C2 = (state, updateState) => {
  updateState({ L1C2: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 2, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL1C3 = (state, updateState) => {
  updateState({ L1C3: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 3, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL1C4 = (state, updateState) => {
  updateState({ L1C4: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 4, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL1C5 = (state, updateState) => {
  updateState({ L1C5: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 5, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL1C6 = (state, updateState) => {
  updateState({ L1C6: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 6, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL1C7 = (state, updateState) => {
  updateState({ L1C7: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 7, color: state.player1 === 1 ? "black" : "white" })
}
export const onClickL1C8 = (state, updateState) => {
  updateState({ L1C8: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 8, color: state.player1 === 1 ? "black" : "white" })
}