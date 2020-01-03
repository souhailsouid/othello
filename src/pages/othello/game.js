import React, { Component, Fragment } from 'react'
import Table from '../../components/table/table'
import Panel from '../../components/panel/panel'
import './game.css'
class Game extends Component {
  render() {
    console.log(this.state)
    return (
      <Fragment>
        <h1>Othello</h1>
        <Panel />
        {/* <article className="col-md-12 col-sm-12 col-xs-12 d-flex game-page-style">
          <Table />
          <Panel />
        </article> */}

      </Fragment>
    )
  }
}
export default Game