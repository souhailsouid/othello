import React from 'react'

// import axios from 'axios'
import pieceBlack from "../assets/Pieces (Black)/pieceBlack_multi10.png"
// import pieceWhite from "../assets/Chips/chipWhite.png"


export const OnClickLine2Case1 = (updateState) => {
  updateState({ Line2Case1: <img src={pieceBlack} alt="piece-black" /> })

}

