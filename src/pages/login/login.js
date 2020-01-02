import React, { Component, Fragment } from 'react'
import SignIn from '../../components/signIn/signIn'
import SignUp from '../../components/signUp/signUp'
import './login.css'
class Login extends Component {
  render() {
    return (
      <Fragment>
        <h1>Othello</h1>

        <article className="col-md-12 col-sm-12 col-xs-12 d-flex login-page-style">
          <SignIn />
          <SignUp />
        </article>

      </Fragment>
    )
  }
}
export default Login