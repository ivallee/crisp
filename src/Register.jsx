import React, {Component} from 'react';


export default class Login extends Component {
  constructor(props) {
    super();
    this.data = {
      name: '',
      password: ''
    };
  }
  
  
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
                <input type="submit" id="submit" onClick={this.onSubmit} value="Log in"/>
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