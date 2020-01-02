import React, { Component } from 'react'
import Input from '../input/input.js'
import Button from 'react-bootstrap/Button'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class SignIn extends Component {
  render() {
    return (
      <section className="col-md-4 col-sm-12 col-xs-12 mt-5 ">

        <form data-toggle="validator" >
          <Input
            label="Email *"
            type="text"
            name="email"
            id="email"
            placeholder="Veuillez inscrire votre adresse email"
          />

          <Input
            label="Password *"
            type="password"
            name="password"
            id="password"
            placeholder="Insérer votre mot de passe "
          />
        </form>
        {/* <Button variant="primary" size="lg" block>
          Se connecter
        </Button> */}
        <Link to="/othello">Se connecter</Link>
      </section>

    )
  }
}
export default SignIn