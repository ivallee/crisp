import React, {Component} from 'react';


export default class Login extends Component {
  constructor(props) {
    super();
    this.data = {
      user: '',
      password: ''
    };
  }
  
  
  onUser = (event) => {
    this.setState({
      user: event.target.value,
    });
  }
  
  onUserChanged = event => {
    this.data.user = event.target.value;
  }
  
  onPasswordChanged = event => {
    this.data.password = event.target.value;
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.newUser(this.data);
  }
  
  render() {
    console.log('hello world')
    return (
        <form id="login">
            <h1>Log In</h1>
            <fieldset id="inputs">
                <input id="user"
                        type="text" 
                        placeholder="Username"
                        onChange={this.onUserChanged}
                        />
                <input id="password" 
                       type="password" 
                       placeholder="Password"
                       onChange={this.onPasswordChanged}
                       />
            </fieldset>
            <fieldset id="actions">
                <input type="submit" id="submit" onClick={this.onSubmit} value="Log in"/>
            </fieldset>
        </form>

    );
  }
}

// <footer className='chatbar'>
// <input className='chatbar-user'
//   onChange={this.onUser}
//   onKeyDown={this.onUserChanged}
//   defaultValue={this.state.user} />
// <input className='chatbar-message'
//   onChange={this.onMessage}
//   onKeyDown={this.onMessageChanged}
//   value={this.state.content}
//   placeholder='Type a message and hit ENTER' />
// </footer>