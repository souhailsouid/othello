import React from 'react'
import Input from '../input/input.js'
import Cookies from 'universal-cookie';
import './signIn.css'

export default () => {
  const cookies = new Cookies();
  let emailLogin
  let passwordLogin

  function handleMailLogin(e) {
    emailLogin = e.target.value
  }

  function handlePasswordLogin(e) {
    passwordLogin = e.target.value
  }

  // function auth(res) {
  //   cookies.set('jwtSecret', res.token)
  //   win
  // }
  function loginUser(e) {
    e.preventDefault();
    console.log(emailLogin, passwordLogin)
    if (emailLogin && passwordLogin) {
      const data = {
        email: emailLogin,
        password: passwordLogin
      }
      fetch('http://localhost:9000/api/auth', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())

        .then(res => cookies.set('jwtSecret', res.token ? res.token : ''), window.location = "http://localhost:3000/othello")

        // .then(res => res.errors === undefined ? window.location = "http://localhost:3000/othello" : null)
        // window.location = "http://localhost:3000/othello"
        .catch(err => this.setState({ error: err.json() }))
    }
  }
  return (
    <section className="col-md-4 col-sm-12 col-xs-12 mt-5 ">


      <form onSubmit={loginUser} >

        <Input
          label="Email *"
          type="text"
          name="email"
          id="email"
          placeholder="Veuillez inscrire votre adresse email"
          onChange={handleMailLogin}
        />

        <Input
          label="Password *"
          type="password"
          name="password"
          id="password"
          placeholder="Insérer votre mot de passe "
          onChange={handlePasswordLogin}
        />
        <input type="submit" value='Envoyer' className='button-style' />
      </form>


    </section>






  )
}