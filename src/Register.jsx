import React, {Component} from 'react';
<<<<<<< HEAD
// import {Redirect} from 'react-router-dom';
import axios from 'axios';
=======

>>>>>>> parent of 4408dd1... moved registration logic to Register.jsx

export default class Login extends Component {
  constructor(props) {
    super();
<<<<<<< HEAD
    this.state = {
      data: {
        name: '',
        password: '',
        // redirect: false,
      }
=======
    this.data = {
      name: '',
      password: ''
>>>>>>> parent of 4408dd1... moved registration logic to Register.jsx
    };
  }
  
  
<<<<<<< HEAD
  newUser = (data) => {
    console.log(this.state.data);
    
    axios.post('http://localhost:8080/users/new', {
      name: this.state.data.name,
      password: this.state.data.password
    })
    .then(function (response) {
      console.log(response);
    })
    // .then(() => this.setState({ redirect: true }))
    .catch(function (error) {
      console.log(error);
    });
  }

=======
>>>>>>> parent of 4408dd1... moved registration logic to Register.jsx
  onUser = (event) => {
    this.setState({
      name: event.target.value,
    });
  }
  
  onUserChanged = event => {
    this.data.name = event.target.value;
  }
  
  onPasswordChanged = event => {
    this.data.password = event.target.value;
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.newUser(this.data);
  }
  
  render() {
<<<<<<< HEAD
    // const { redirect } = this.state;

    // if (redirect) {
    //   return <Redirect to='/'/>;
    // }
=======
>>>>>>> parent of 4408dd1... moved registration logic to Register.jsx
    return (
    <form id="Register">
        <h1>Log In</h1>
        <fieldset id="inputs">
            <input id="name"
                    type="email" 
                    placeholder="Username"
                    onChange={this.onUserChanged}/>
            <input id="password" 
                   type="password" 
                   placeholder="Password"
                   onChange={this.onPasswordChanged}/>
        </fieldset>
        <fieldset id="actions">
            <input type="submit" id="submit" onClick={this.props.onComplete} value="Log in"/>
        </fieldset>
    </form>

    );
  }
}

// <footer className='chatbar'>
// <input className='chatbar-name'
//   onChange={this.onUser}
//   onKeyDown={this.onUserChanged}
//   defaultValue={this.state.name} />
// <input className='chatbar-message'
//   onChange={this.onMessage}
//   onKeyDown={this.onMessageChanged}
//   value={this.state.content}
//   placeholder='Type a message and hit ENTER' />
// </footer>