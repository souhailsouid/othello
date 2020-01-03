// import React, { Component } from 'react'
// import Input from '../input/input.js'
// import Button from 'react-bootstrap/Button'
// import axios from 'axios'
// import './signUp.css'
// class SignUp extends Component {
//   constructor(props) {
//     super(props)
//     this.onChange = this.onChange.bind(this)

//   }
//   onChange(e) {
//     this.setState({ [e.target.name]: e.target.value })
//   }
//   onSubmit(e) {
//     e.preventDefault()
//     const newUser = {
//       name: this.state.name,
//       email: this.state.email,
//       password: this.state.password,
//       password2: this.state.password2,

//     }


//   }
//   // loginUser(e) {
//   //   e.preventDefault();

//   //   if (emailLogin && passwordLogin) {
//   //     const data = {
//   //       user: {
//   //         email: emailLogin,
//   //         password: passwordLogin
//   //       }
//   //     }
//   //     fetch('http://localhost:8090/api/users/', {
//   //       method: 'post',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(data)
//   //     })
//   //       .then(res => res.json())
//   //       .then(res => youAreConnected(res))
//   //   }
//   // }

//   // youAreConnected = (res) => {
//   //   window.sessionStorage.setItem('jwtSecret', res.user.token)
//   //   props.setConnected(true)
//   // }
//   //   componentDidMount() {
//   //     const api = 'http://localhost:9000/api/users';

//   //     const tokenID = user.data.id; /*take only token and save in token variable*/
//   //     axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
//   //       .then(res => {
//   //         console.log(res.data);
//   //   .catch ((error) => {
//   //           console.log(error)
//   //         }
//   //       }

//   // axios.post('http://localhost:9000/api/auth')
//   //   }
//   render() {
//     return (
//       <section className="col-md-4 col-sm-12 col-xs-12 mt-5 sign-up-style">
//         <span className="title">Inscription</span>

//         <form data-toggle="validator" className="mt-3" onSubmit={this.onSubmit}>

//           <Input
//             label="Email *"
//             type="text"
//             name="email"
//             onChange={this.onChange}
//             id="email"
//             placeholder="Veuillez inscrire votre adresse email"
//           />
//           <Input
//             label="Nom d'utilisateur *"
//             type="text"
//             name="name"
//             onChange={this.onChange}
//             id="name"
//             placeholder="Veuillez inscrire un nom d'utilisateur"
//           />
//           <Input
//             label="Mot de passe *"
//             type="password"
//             name="password"
//             onChange={this.onChange}
//             id="password"
//             placeholder="Insérer un mot de passe "
//           />
//           <Input
//             label="Confirmer mot de passe *"
//             type="password"
//             name="password2"
//             onChange={this.onChange}
//             id="password2"
//             placeholder="Insérer de nouveau votre mot de passe "
//           />
//         </form>
//         <Button variant="dark" size="lg" block>
//           S'inscrire
//         </Button>
//       </section>

//     )
//   }
// }
// export default SignUp
import React from 'react'
import Input from '../input/input.js'
import './signUp.css'
export default (props) => {

  let email
  let name
  let password
  let password2

  function handleMail(e) {
    email = e.target.value
  }
  function handleName(e) {
    name = e.target.value
  }
  function handlePassword(e) {
    password = e.target.value
  }
  function handlePassword2(e) {
    password2 = e.target.value
  }

  function createUser(e) {
    e.preventDefault();
    console.log(email, name, password, password2)
    if (email && name && password && password2) {
      const data = {
        email: email,
        name: name,
        password: password,
        password2: password2
      }
      fetch('http://localhost:9000/api/users', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => console.log(res))
    }
  }


  console.log(this)
  return (




    <section className="col-md-4 col-sm-12 col-xs-12 mt-5 sign-up-style">
      <span className="title">Inscription</span>

      <form data-toggle="validator" className="mt-3" onSubmit={createUser}>

        <Input
          label="Email *"
          type="text"
          name="email"
          onChange={handleMail}
          id="email"
          placeholder="Veuillez inscrire votre adresse email"
        />
        <Input
          label="Nom d'utilisateur *"
          type="text"
          name="name"
          onChange={handleName}
          id="name"
          placeholder="Veuillez inscrire un nom d'utilisateur"
        />
        <Input
          label="Mot de passe *"
          type="password"
          name="password"
          onChange={handlePassword}
          id="password"
          placeholder="Insérer un mot de passe "
        />
        <Input
          label="Confirmer mot de passe *"
          type="password"
          name="password2"
          onChange={handlePassword2}
          id="password2"
          placeholder="Insérer de nouveau votre mot de passe "
        />

        <input type="submit" value='Créer le compte' className='button-creation-style' />
      </form>
    </section>

  )
}