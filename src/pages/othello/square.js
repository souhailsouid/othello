// import React from 'react';

// export default function Square(props) {
// 	let squareClasses = `square ${props.isAvailable ? 'available-square' : 'not-available-square'}`;
// 	let colorMarkerClasses = props.value === 'X' ? 'marker white' : props.value === 'O' ? 'marker black' : '';

// 	return (
// 		<div className={squareClasses} onClick={props.onClick}>
// 			{props.value ? <div className={colorMarkerClasses}></div> : ''}
// 		</div>
// 	);
// }

import React from 'react';
import pieceBlack from "../../assets/Pieces (Black)/pieceBlack_multi10.png"
import pieceWhite from "../../assets/Chips/chipWhite.png"
export default function Square(props) {
	let squareClasses = `square ${props.isAvailable ? 'available-square' : 'not-available-square'}`;
	let colorMarkerClasses = props.value === 'X' ? <img src={pieceBlack} alt="piece-black"  /> : props.value === 'O' ? <img src={pieceWhite} alt="piece-white"className="piece-white-style"  /> : '';

	return (
		<div className={squareClasses} onClick={props.onClick}>
			{props.value ? <div className={colorMarkerClasses}>{colorMarkerClasses}</div> : ''}
		</div>
	);
}