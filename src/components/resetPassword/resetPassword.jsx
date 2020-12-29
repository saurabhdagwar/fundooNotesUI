import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Services from "../Services/services";
import "./resetPassword.css"
const service = new Services();

export default class forgotPassword extends React.Component {
  state = {
    password: "",
    passwordError: "",
    passwordFlag: false,
    conformPassword: "",
    conformPasswordError: "",
    conformPasswordFlag: false,
  };

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      passwordError: "",
      passwordFlag: false,
      conformPasswordError: "",
      conformPasswordFlag: false,
    };

    if (this.state.password.length == 0) {
      errors.passwordFlag = true;
      errors.conformPasswordFlag = true;
      isError = true;
      errors.passwordError = "Enter Password";
    }

    if(this.state.conformPassword != this.state.password){
      errors.conformPasswordFlag = true;
      isError = true;
      errors.conformPasswordError = "Passwords didn't match.";
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
        conformPasswordFlag: false,
        conformPasswordError: "",
        passwordFlag: false,
        passwordError: "",
      });
      let resetPasswordData = {
        password: this.state.password,
      };
      service
        .resetPassword(resetPasswordData)
        .then((resetPasswordData) => {
          let obj = JSON.stringify(resetPasswordData);
          console.log("Password reset successful" + obj);
        })
        .catch((resetPasswordData) => {
          let obj = JSON.stringify(resetPasswordData);
          console.log("Password reset Failed" + obj);
        });
    } else {
      console.log("Reset Failed");
    }
  };

  render() {
    return (
      <div className="main">
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
          <span className="signIn">Reset Password</span>
          Use your Fundoo Account
          <form className="Form">
          <div className="inputField">
              <TextField
                size="small"
                className="input"
                label="Password"
                type="password"
                variant="outlined"
                name="password"
                onChange={(e) => this.change(e)}
                error={this.state.passwordFlag}
                helperText={this.state.passwordError}
              />
            </div>
            <div className="inputField">
              <TextField
                size="small"
                className="input"
                label="Conform"
                variant="outlined"
                name="conformPassword"
                helperText={this.state.conformPasswordError}
                error={this.state.conformPasswordFlag}
                onChange={(e) => this.change(e)}
              />
            </div>
            <span className="buttonFooter">
        <div className="button">
        <Button variant="contained"  
        onClick={(e) => this.onSubmit(e)} color="primary">
          Set Password
        </Button>
        </div>
        </span>
          </form>
        </div>
      </div>
    );
  }
}
