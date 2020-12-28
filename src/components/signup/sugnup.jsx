import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import "./signup.css";
import AccImg from "../assets/account.svg";
import Services from "../Services/services";
import { makeStyles } from '@material-ui/core/styles';
const service = new Services();


export default class signUp extends React.Component {
  
   state = {
    firstName: "",
    firstNameFlag: false,
    firstNameError: "",
    lastName: "",
    lastNameFlag: false,
    lastNameError: "",
    username: "",
    usernameFlag: false,
    usernameError: "",
    password: "",
    passwordFlag: false,
    passwordError: "",
    conformPassword: "",
    conformPasswordFlag: false,
    conformPasswordError: ""
  };
 
  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

    validate = () => {
    let isError = false;
    const errors = {
      firstNameError: "",
      firstNameFlag: false,
      lastNameError: "",
      lastNameFlag: false,
      usernameError: "",
      usernameFlag: false,
      passwordError: "",
      passwordFlag: false,
      conformPasswordError: "",
      conformPasswordFlag: false,
    };

    if (this.state.firstName.length == 0){
      errors.firstNameFlag = true;
      isError = true;
      errors.firstNameError = "Enter first name"
      errors.lastNameError = ""
    }
    if (this.state.lastName.length == 0){
      errors.lastNameFlag = true;
      isError = true;
      errors.firstNameError = "\u00a0"
      errors.lastNameError = "Enter last name"
    }
    
    if (this.state.lastName.length == 0 && this.state.firstName.length == 0){
      errors.firstNameFlag = true;
      errors.lastNameFlag = true;
      isError = true;
      errors.firstNameError = "Enter first and last names"
      errors.lastNameError = "\u00a0"
    }

    if (this.state.username.length == 0) {
      errors.usernameFlag = true;
      isError = true;
      errors.usernameError = "Enter your user name";
    }

    if (this.state.password.length == 0) {
      errors.passwordFlag = true;
      isError = true;
      errors.passwordError = "Enter a password";
      errors.conformPasswordError = "\u00a0";
    }

    if (this.state.conformPassword.length == 0) {
      errors.conformPasswordFlag = true;
      isError = true;
      errors.passwordError = "\u00a0";
      errors.conformPasswordError = "Confirm your password";
    }
    if(this.state.conformPassword != this.state.password){
      errors.conformPasswordFlag = true;
      isError = true;
      errors.passwordError = "Passwords didn't match.";
      this.state.conformPassword = "aa";
      errors.conformPasswordError = "\u00a0";
    }

    if(this.state.conformPassword.length == 0 && this.state.password.length == 0){
      errors.passwordFlag = true;
      errors.conformPasswordFlag = true;
      isError = true;
      errors.passwordError = "Enter a password";
      errors.conformPasswordError = "\u00a0";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        firstNameError: "",
        firstNameFlag: false,
        lastNameError: "",
        lastNameFlag: false,
        usernameFlag: false,
        usernameError: "",
        passwordFlag: false,
        passwordError: "",
        conformPasswordFlag: false,
        conformPasswordError: ""
      });
      let registrationData = {"firstName": this.state.firstName,
      "lastName": this.state.lastName,
       "phoneNumber": "8399288374",
       "service": "Advance",
       "email": this.state.username,
      "password":this.state.password}
      service.Registration(registrationData)
      .then((registrationData) => {
        let obj = JSON.stringify(registrationData);
        console.log("Registration successful"+obj)
      })
      .catch((registrationData) => {
        console.log("Registration Failed"+registrationData)
      })
    }
    else{
      console.log("Registration Failed");
     }
    }
  render() {
    return (
      <div className="registration">
        <div elevation={0} className="signupPage">
          <div className="header">
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
            <div className="headerText">Create your Fundoo Account </div>
          </div>
          <div className="container">
            <form className="form">
              <div className="inputs">
                <div className="inputField">
                  <TextField
                    autoCapitalize="off"
                    className={classes.txtField}
                    name="firstName"
                    onChange={e => this.change(e)}
                    error={this.state.firstNameFlag}
                    helperText={this.state.firstNameError}
                    size="small"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    
                  />
                </div>
                <div className="inputField">
                  <TextField
                    size="small"
                    name="lastName"
                    label="Last Name"
                    className={classes.txtField}
                    onChange={e => this.change(e)}
                    variant="outlined"
                    error={this.state.lastNameFlag}
                    helperText={this.state.lastNameError}
                    fullWidth
                  />
                </div>
              </div>
              <div className="inputs">
                <div className="inputField">
                  <TextField
                    size="small"
                    variant="outlined"
                    fullWidth
                    className={classes.txtField}
                    className="userNameField"
                    name="username"
                    helperText={this.state.usernameError}
                    error={this.state.usernameFlag}
                    onChange={e => this.change(e)}
                    label="Username"
                  />
                </div>
              </div>
              <div className="inputs">
                <div className="inputField">
                  <TextField
                    size="small"
                    id="password"
                    label="Password"
                    name="password"
                    className={classes.txtField}
                    onChange={e => this.change(e)}
                    error={this.state.passwordFlag}
                    helperText={this.state.passwordError}
                    fullWidth
                    type="password"
                    // type={this.showPassword()}
                    variant="outlined"
                  />
                </div>
                <div className="inputField">
                  <TextField
                    size="small"
                    id="password"
                    label="Confirm"
                    name="conformPassword"
                    className={classes.txtField}
                    onChange={e => this.change(e)}
                    helperText={this.state.conformPasswordError}
                    error={this.state.conformPasswordFlag}
                    fullWidth
                    type="password" 
                    // type={this.showPassword()}
                    variant="outlined"
                  />
                </div>
              </div>
              <span className="checkBoxInputs">
                <Checkbox
                  defaultChecked
                  id="passCheck"
                  color="primary"
                  // onClick={this.showPassword()}
                  className="showPass"
                />
                Show Password
              </span>
              <div className="footerButtons">
          <div className='signInLink'><Button color="primary">Sign In insted</Button></div>
            <div className="nextButton" >
              <Button variant="contained" color="primary"  onClick={e => this.onSubmit(e)} primary>
                Next
              </Button>
            </div>
          </div>
            </form>
            <div className="regImg">
              <img src={AccImg} alt="" />
             <p className='ImgText'> One account. All of Fundoo working for you.</p>
            </div>
          </div>
          
          
        </div>
      </div>
    );
  }
}
