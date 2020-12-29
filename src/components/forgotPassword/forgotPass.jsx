import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import './forgotPass.css'
import Services from "../Services/services";
const service = new Services();

export default class Hello extends React.Component {
  state = {
    email: "",
    emailError: "",
    emailFlag: false,
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      emailError: "",
      emailFlag: false,
    }
    if (this.state.email.length == 0) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Enter your Email ";
    }
    if (!/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/.test(this.state.email)) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Email is not proper";
    }
    this.setState({
      ...errors,
    });

    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        emailFlag: false,
        emailError: "",
      });
      let data = {
        email: this.state.email,
      };
      service.forgotPassword(data)
        .then((data) => {
          let obj = JSON.stringify(data);
          console.log("Mail Sended to given email" + obj);
        })
        .catch((data) => {
          let obj = JSON.stringify(data);
          console.log("Request Failed" + obj);
        });
    } else {
      console.log("Request Failed");
    }
  }

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
          label="Email"
          variant="outlined"
          name="email"
          helperText={this.state.emailError}
          error={this.state.emailFlag}
          onChange={(e) => this.change(e)}
        />
        </div>
        <span className="buttonFooter">
        <div className="button">
        <Button variant="contained"  
        onClick={(e) => this.onSubmit(e)} color="primary">
          Send
        </Button>
        </div>
        </span>
      </form>
      </div>
    </div>
  }
}