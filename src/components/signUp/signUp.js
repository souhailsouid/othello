import React, { Component } from 'react'
import Input from '../input/input.js'
import Button from 'react-bootstrap/Button'
import './signUp.css'
class SignUp extends Component {
  render() {
    return (
      <section className="col-md-4 col-sm-12 col-xs-12 mt-5 sign-up-style">
        <span className="title">Inscription</span>


        <form data-toggle="validator" className="mt-3" >
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
            placeholder="Insérer un mot de passe "
          />
          <Input
            label="Password *"
            type="password"
            name="password"
            id="password"
            placeholder="Insérer de nouveau votre mot de passe "
          />
        </form>
        <Button variant="dark" size="lg" block>
          S'inscrire
        </Button>
      </section>

    )
  }
}
export default SignUp