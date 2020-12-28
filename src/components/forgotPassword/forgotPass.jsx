import React from 'react'
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import './forgotPass.css'
export default class Hello extends React.Component {
  
  render () {
    return <div className='main'>
      <div elevation={0} className="ForgetPassPage">
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
          <span className="title">Forgot Password</span>
          Enter your phone number or email
          <form className="Form">
        <div className="inputField">
        <TextField className='input'
          label="Email or Phone"
          variant="outlined"
        />
        </div>
        <span className="buttonFooter">
        <div className="button">
        <Button variant="contained"  color="primary">
          Sign In
        </Button>
        </div>
        </span>
      </form>
      </div>
    </div>
  }
}