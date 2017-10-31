import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { login } from './api';
import propTypes from 'proptypes';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  static propTypes = {
    userUpdated: propTypes.func
  }

  handleLogin(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let password = this.refs.password.value;
    login(name, password, this.props.userUpdated).then((response) => {
      if (response.success) {
        console.log('successful login!');
        this.setState({ isLoggedIn: true });
      }
      else {
        console.log('failed login!');
      }
    });
  }

  // .then(() => this.setState({ redirect: true }));


  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/' />;
    }
    return (
      <form onSubmit={this.handleLogin.bind(this)}>
        <h3>Sign in</h3>
        <input type="text" ref="name" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Login" />
      </form>
    );
  }

}

//   render() {
//     return (
//     <form id="Login">
//         <h1>Log In</h1>
//         <fieldset id="inputs">
//             <input id="name"
//                     type="email"
//                     placeholder="Username"
//                     onChange={this.onUserChanged}/>
//             <input id="password"
//                    type="password"
//                    placeholder="Password"
//                    onChange={this.onPasswordChanged}/>
//         </fieldset>
//         <fieldset id="actions">
//             <input type="submit" id="submit" onClick={this.onSubmit} value="Log in"/>
//         </fieldset>
//     </form>
//     );
//   }
// }
