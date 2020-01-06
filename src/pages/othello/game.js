import React from 'react';
import pieceBlack from "../../assets/Pieces (Black)/pieceBlack_multi10.png"
import { Link } from "react-router-dom";
import pieceWhite from "../../assets/Chips/chipWhite.png"
import { PostPositionIA, getGameIAByID } from '../../methods/fetch'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'
import Board from './board.js';
import Ai from './ai.js';
import axios from 'axios'
import './game.css'

export default class Game extends React.Component {

	constructor(props) {
		super(props);



		var get = props.match.params.id;
		console.log(get)
		this.ai = new Ai(this);


		const initSquares = Array(64).fill(null);
		[initSquares[8 * 3 + 3], initSquares[8 * 3 + 4], initSquares[8 * 4 + 4], initSquares[8 * 4 + 3]] = ['X', 'O', 'X', 'O']


		this.state = {

			history: [{
				squares: initSquares,
				xNumbers: 2,
				oNumbers: 2,
				xWasNext: true,
				winner: ''

			}],
			stepNumber: 0,
			xIsNext: true,
			piecewhiteIA: true,
			alert: true,
			notificationTour: true,
			notificationTourIa: false,
			savePositions: '',
			xNumbersSaving: '',
			oNumbersSaving: '',
			availablePosition: '',
			id: '',
			winner: ''

		}
	}
	async initGame() {
		const initSquares = await Array(64).fill(null);

		[initSquares[8 * 3 + 3], initSquares[8 * 3 + 4], initSquares[8 * 4 + 4], initSquares[8 * 4 + 3]] = ['X', 'O', 'X', 'O']
	}


	handleUpdate() {
		var get = this.props.match.params.id
		const elements = {
			savePositions: this.state.savePositions,
			saveScorePlayer1: this.state.xNumbersSaving,
			saveScoreIA: this.state.oNumbersSaving,
			saveWinners: this.state.winner
		}
		axios.put(`http://localhost:9000/api/games/ia/${get}`, elements)
			.then((data) => {
				this.setState({ gameByID: data.data })
				// this.state.gameByID = data.data
				const updatedObj = {
					...this.state.gameByID
				}
				this.setState({ gameByID: updatedObj })
			})
			.catch((err) => console.log(err))


	}
	calculateWinner(xNumbers, oNumbers) {
		return (xNumbers + oNumbers < 64) ? null : (xNumbers === oNumbers) ? 'XO' : (xNumbers > oNumbers ? 'X' : 'O');
	}

	flipSquares(squares, position, xIsNext) {
		let modifiedBoard = null;
		// Calculate row and col of the starting position
		let [startX, startY] = [position % 8, (position - position % 8) / 8];

		if (squares[position] !== null) {
			return null;
		}

		// Iterate all directions, these numbers are the offsets in the array to reach next sqaure
		[1, 7, 8, 9, -1, -7, -8, -9].forEach((offset) => {
			let flippedSquares = modifiedBoard ? modifiedBoard.slice() : squares.slice();
			let atLeastOneMarkIsFlipped = false;
			let [lastXpos, lastYPos] = [startX, startY];

			for (let y = position + offset; y < 64; y = y + offset) {

				// Calculate the row and col of the current square
				let [xPos, yPos] = [y % 8, (y - y % 8) / 8];

				// Fix when board is breaking into a new row or col
				if (Math.abs(lastXpos - xPos) > 1 || Math.abs(lastYPos - yPos) > 1) {
					break;
				}

				// Next square was occupied with the opposite color
				if (flippedSquares[y] === (!xIsNext ? 'X' : 'O')) {
					flippedSquares[y] = xIsNext ? 'X' : 'O';
					atLeastOneMarkIsFlipped = true;
					[lastXpos, lastYPos] = [xPos, yPos];
					continue;
				}
				// Next aquare was occupied with the same color
				else if ((flippedSquares[y] === (xIsNext ? 'X' : 'O')) && atLeastOneMarkIsFlipped) {
					flippedSquares[position] = xIsNext ? 'X' : 'O';
					modifiedBoard = flippedSquares.slice();
				}
				break;
			}
		});

		return modifiedBoard;
	}

	checkAvailableMoves(color, squares) {
		console.log(this.state)
		console.log("cestquoi", squares)

		return squares
			.map((value, index) => { return this.flipSquares(squares, index, color) ? index : null; })
			.filter((item) => { return item !== null; })
	}

	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[this.state.stepNumber];
		console.log('estca', i)
		if (this.calculateWinner(current.xNumbers, current.oNumbers) || current.squares[i]) {
			return;
		}

		const changedSquares = this.flipSquares(this.state.availablePosition.length !== 0 ? this.state.availablePosition : current.squares, i, this.state.xIsNext);

		if (changedSquares === null) {
			return;
		}

		const xNumbers = changedSquares.reduce((acc, current) => { return current === 'X' ? acc + 1 : acc }, 0);
		const oNumbers = changedSquares.reduce((acc, current) => { return current === 'O' ? acc + 1 : acc }, 0);

		let shouldTurnColor = this.checkAvailableMoves(!this.state.xIsNext, changedSquares).length > 0 ? !this.state.xIsNext : this.state.xIsNext

		this.setState({
			history: history.concat([{
				squares: changedSquares,
				xNumbers: xNumbers,
				oNumbers: oNumbers,
				xWasNext: shouldTurnColor,
				winner: (xNumbers + oNumbers < 64) ? null : (xNumbers === oNumbers) ? 'XO' : (xNumbers > oNumbers ? 'X' : 'O')
			}]),
			stepNumber: history.length,
			xIsNext: shouldTurnColor,
			notificationTour: false,
			notificationTourIa: true,
			xNumber: xNumbers,
			oNumber: oNumbers,
			savePositions: this.state.history !== 0 ? this.state.history[this.state.history.length - 1].squares : this.state.history,
			xNumbersSaving: this.state.history !== 0 ? this.state.history[this.state.history.length - 1].xNumbers : xNumbers,
			oNumbersSaving: this.state.history !== 0 ? this.state.history[this.state.history.length - 1].oNumbers : oNumbers,
			winner: (xNumbers + oNumbers < 64) ? '' : (xNumbers === oNumbers) ? 'XO' : (xNumbers > oNumbers ? 'X' : 'O')

		},
			this.doRobotMove);
	}

	doRobotMove() {

		if ((this.state.piecewhiteIA) && (!this.state.xIsNext)) {
			var bestMove = this.ai.doMove();
			if (bestMove !== null) {
				setTimeout(() => {
					this.handleClick(bestMove);
					this.setState({
						notificationTour: true,
						notificationTourIa: false,
						savePositions: this.state.history !== 0 ? this.state.history[this.state.history.length - 1].squares : '',
						xNumbersSaving: this.state.history !== 0 ? this.state.history[this.state.history.length - 1].xNumbers : '',
						oNumbersSaving: this.state.history[this.state.history.length - 1].oNumbers

					})
					this.handleUpdate()

				}, 2000);



			}
		}
	}

	jumpTo(step) {
		this.setState({
			stepNumber: parseInt(step, 0),
			xIsNext: this.state.history[step].xWasNext
		});
	}

	resetGame() {
		this.jumpTo(0);
		this.setState({
			history: this.state.history.slice(0, 1)
		})
	}


	componentDidMount() {


		var get = this.props.match.params.id;
		console.log(this, get)
		axios.all([getGameIAByID(get), PostPositionIA(get),])
			.then(axios.spread((gameByID, positionGame) => {
				return this.setState({
					gameByID: gameByID.data,
					positionGame: positionGame.data,
					availablePosition: gameByID.data.savePositions


				})
			}))
	}




	render() {
		console.log(this.state.history[this.state.history.length - 1].winner)
		console.log(this.state ? this.state.gameByID : 'ee')
		console.log(this.location)
		console.log("xhzxk", this.state)
		console.log(this.state.winner)
		const history = this.state.history.slice();
		const current = history[this.state.stepNumber];

		let winner = this.calculateWinner(current.xNumbers, current.oNumbers)

		const moves = history.map((step, move) => {
			const desc = move ? 'Go to move #' + move : 'Go to game start';
			return (
				<option key={move} value={move}>
					{desc}
				</option>
			);
		});

		const selectMoves = () => {
			return (
				<select id="dropdown" ref={(input) => this.selectedMove = input} onChange={() => this.jumpTo(this.selectedMove.value)} value={this.state.stepNumber}>
					{moves}
				</select>
			)
		}

		let availableMoves = this.checkAvailableMoves(current.xWasNext, this.state.availablePosition.length !== 0 ? this.state.availablePosition : current.squares);
		let availableMovesOpposite = this.checkAvailableMoves(!current.xWasNext, this.state.availablePosition.length !== 0 ? this.state.availablePosition : current.squares);

		if ((availableMoves.length === 0) && (availableMovesOpposite.length === 0)) {
			winner = current.xNumbers === current.oNumbers ? 'XO' : current.xNumbers > current.oNumbers ? 'X' : 'O';
		}

		let status =

			winner ?
				(winner === 'XO') ? 'Match nul' : (winner === 'X' ? 'Vous êtes le vainqueur' : 'Vous avez perdu!') :
				''
		// [this.state.xIsNext ? 'Whites turn' : 'Blacks turn', ' with ', availableMoves.length, ' available moves.'].join('');
		console.log(status)
		console.log('dddd', this.state.availablePosition, current.squares)
		console.log('doopopddd', this.state.availablePosition.length !== 0, typeof this.state.availablePosition)
		return (

			<div className="game">

				<article className="col-md-6 col-sm-12 col-xs-12 mt-2">


					{/* <Board squares={current.squares} availableMoves={availableMoves} onClick={(i) => this.handleClick(i)} /> */}

					{this.state.gameByID && this.state.availablePosition !== '' ?
						<Board
							squares={this.state.availablePosition.length !== 0 ? this.state.availablePosition : current.squares}
							availableMoves={availableMoves}
							onClick={(i) => this.handleClick(i)} />
						: 'Chargement en cours...'}

					<div className="game-status">{status}&nbsp;{winner ? <button onClick={() => this.resetGame()}>Play again</button> : ''}</div>
					<div></div>
				</article>
				<article className=" col-md-6 col-sm-12 col-xs-12 mt-3 ">
					<section className="col-md-12 col-sm-12 col-xs-12  section-notification ">
						{this.state.notificationTour ?
							<Alert variant={status === 'Vous avez perdu!' ? "danger" : "success"} onClose={() => this.setState({ alert: false, notificationTour: false })} dismissible>
								<Alert.Heading>{status} </Alert.Heading>
								{status === 'Vous avez perdu!' || status === 'Vous êtes le vainqueur' || status === 'Match nul' ? '' :
									<p>C'est votre tour !</p>}

							</Alert> : <Alert variant="danger" onClose={() => this.setState({ alert: false, notificationTour: false })} dismissible>
								<Alert.Heading>{status} </Alert.Heading>

								<p>Veuillez patientez, votre adversaire joue !</p>

							</Alert>}
					</section>
					<section className="col-md-12 col-sm-12 col-xs-12   ">
						<Card className="bg-dark text-white">
							<Card.Title className="d-flex justify-content-center"> <p className="name-game-style">Nom de la partie: </p> &nbsp; <p className="title-game"> {this.state.positionGame ? this.state.positionGame.name : this.state.positionGame}</p></Card.Title>
							<Card.Title>Tableau de jeu</Card.Title>

							{/* <p className="title-game"> {this.state ? this.state.gameByID.map(el => el.saveScorePlayer1): null  }</p> */}
							<Card.Body className="d-flex" >
								<section className=" col-md-6 col-sm-12 col-xs-12 mt-2 row1-style">
									<table>
										<thead>
											<tr>
												<th></th>
												<th></th>
												<span>Nombre de pièces</span>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>Vous:</td>
												<td className="border-style "><img src={pieceBlack} alt="piece-black" /></td>
												<td className="text-position">   {this.state.gameByID
													? this.state.gameByID.saveScoreIA && this.state.xNumbersSaving === '' ? this.state.gameByID.saveScorePlayer1 : current.xNumbers : null}</td>
											</tr>
											<tr>
												<td>I.A:  </td>
												<td><img src={pieceWhite} alt="piece-white" className="piece-white-dashboard" /></td>
												<td className="text-position">  {this.state.gameByID
													? this.state.gameByID.saveScoreIA && this.state.oNumbersSaving === '' ? this.state.gameByID.saveScoreIA : current.oNumbers : null}</td>
											</tr>
										</tbody>
									</table>
								</section>

								<section className="col-md-6 col-sm-12 col-xs-12 mt-2 row2-style">
									<span> Nombre de pièces</span>
									<p>{current.xNumbers}</p>
									<p> {current.oNumbers}</p>
								</section>
							</Card.Body>


							<Card.Footer>

							</Card.Footer>
						</Card>



					</section>


					<section className="col-md-12 col-sm-12 col-xs-12 mt-2 ">

						{this.state.alert && status !== '' ?
							<Alert variant={status === 'Vous êtes le vainqueur' ? "success" : "danger"} onClose={() => this.setState({ alert: false })} dismissible>
								<Alert.Heading>{status} </Alert.Heading>

								{/* {winner ? <button   className="button-style" onClick={() => this.resetGame()} >Quitter</button> : ''} */}
								{winner ?
									<Link to={'/dashboard'} className="single-player-link">Se rediriger sur la page d'accueil</Link>

									// <button   className="button-style" onClick={() => this.resetGame()} >Quitter</button>
									: ''}
							</Alert>
							: null}
					</section>
				</article>
			</div>
		);
	}
}