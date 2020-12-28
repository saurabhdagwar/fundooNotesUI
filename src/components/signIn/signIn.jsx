import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import './signIn.css';

export default class Hello extends React.Component {
  
  state = {
    username: "",
    password: "",
    usernameError: "",
    usernameFlag: false,
    passwordError: "",
    passwordFlag: false
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      usernameError: "",
      usernameFlag: false,
      passwordError: "",
      passwordFlag: false
    };

    if (this.state.username.length == 0) {
      errors.usernameFlag = true;
      isError = true;
      errors.usernameError = "Enter your Email ";
    }
    if (!(/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/).test(this.state.username)) {
      errors.usernameFlag = true;
      isError = true;
      errors.usernameError = "Email is not proper";
    }
    if(this.state.password.length == 0){
      errors.passwordFlag = true;
      isError = true;
      errors.passwordError = "Enter Password";
    }

    this.setState({
      ...errors
    });

    return isError;
  }

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
      usernameFlag: false,
      usernameError: "",
      passwordFlag: false,
      passwordError: "",
      });
      console.log("login Failed");
    }
    
  }

  render () {
    return <div className='main'>
      <div elevation={0} className="page">
      <span className="inlineTitle">
            <b>
              <font color="#1976d2">F</font>
              <font color="#e53935">u</font>
              <font color="#ffb74d">n</font>
              <font color="#1976d2">d</font>
              <font color="#388e3c">o</font>
              <font color="#e53935">o</font>
            </b>
          </span>
          <span className="signIn">Sign in</span>
          Use your Fundoo Account
          <form className="loginForm">
        <div className="inputField">
        <TextField size='small' className='input'
          label="Email"
          variant="outlined"
          name="username"
          helperText={this.state.usernameError}
          error={this.state.usernameFlag}
          onChange={e => this.change(e)}

        />
        </div>
        <div className="inputField">
        <TextField size='small' className='input'
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          onChange={e => this.change(e)}
          error={this.state.passwordFlag}
          helperText={this.state.passwordError}
         
        />
        </div>
        <div className='forgetPassword'>
        <Button color="primary">
          Forgot password?
        </Button>
        </div>
        <span className="footer">
        <div className="button">
        <Button color="primary">
          Create account
        </Button>
        </div>
        <div className="button">
        <Button variant="contained"  color="primary" onClick={e => this.onSubmit(e)} >
          Sign In
        </Button>
        </div>
        </span>
      </form>
      </div>
    </div>
  }
}