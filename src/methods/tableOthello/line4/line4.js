import React from 'react'

import pieceBlack from "../../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../../assets/Chips/chipWhite.png"
export const onClickL4C1 = (state, updateState) => {
  updateState({ L4C1: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 25, color: state.player1 === 1 ? "black" : "white" })
}

export const onClickL4C2 = (state, updateState) => {
  updateState({ L4C2: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 26, color: state.player1 === 1 ? "black" : "white" })
}

export const onClickL4C3 = (state, updateState) => {
  updateState({ L4C3: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 27, color: state.player1 === 1 ? "black" : "white" })
}

export const onClickL4C4 = (state, updateState) => {
  updateState({ L4C4: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 28, color: state.player1 === 1 ? "black" : "white" })
}

export const onClickL4C5 = (state, updateState) => {
  updateState({ L4C5: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 29, color: state.player1 === 1 ? "black" : "white" })
}

export const onClickL4C6 = (state, updateState) => {
  updateState({ L4C6: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 30, color: state.player1 === 1 ? "black" : "white" })
}

export const onClickL4C7 = (state, updateState) => {
  updateState({ L4C7: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 31, color: state.player1 === 1 ? "black" : "white" })
}

export const onClickL4C8 = (state, updateState) => {
  updateState({ L4C8: <img src={state.player1 === 1 ? pieceBlack : pieceWhite} alt="piece-black" />, player1: state.player1 === 1 ? 0 : 1, id: 32, color: state.player1 === 1 ? "black" : "white" })
}
