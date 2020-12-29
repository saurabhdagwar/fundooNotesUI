import React from "react";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import "./signup.css";
import AccImg from "../assets/account.svg";
import Services from "../Services/services";
const service = new Services();

export default class signUp extends React.Component {
  
  nextPath(path) {
    this.props.history.push(path);
  }

   state = {
    firstName: "",
    firstNameFlag: false,
    firstNameError: "",
    lastName: "",
    lastNameFlag: false,
    lastNameError: "",
    email: "",
    emailFlag: false,
    emailError: "",
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
      emailError: "",
      emailFlag: false,
      passwordError: "",
      passwordFlag: false,
      conformPasswordError: "",
      conformPasswordFlag: false,
    };

    if (this.state.firstName.length == 0){
      errors.firstNameFlag = true;
      isError = true;
      errors.firstNameError = "Enter first name"
    }
    if (this.state.lastName.length == 0){
      errors.lastNameFlag = true;
      isError = true;
      errors.lastNameError = "Enter last name"
    }
    
    if (this.state.lastName.length == 0 && this.state.firstName.length == 0){
      errors.firstNameFlag = true;
      errors.lastNameFlag = true;
      isError = true;
      errors.firstNameError = "Enter first and last names"
      errors.lastNameError = ""
    }

   if (!/[a-zA-Z0-9._]+[@]{1}[a-zA-Z120-9]*[.]{1}[a-zA-Z]*$/.test(this.state.email)) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Enter proper Email Id";
    }

    if (this.state.email.length == 0) {
      errors.emailFlag = true;
      isError = true;
      errors.emailError = "Enter Email ";
    }

    if (this.state.password.length == 0) {
      errors.passwordFlag = true;
      isError = true;
      errors.passwordError = "Enter a password";
    }
    
    if(this.state.conformPassword != this.state.password){
      errors.conformPasswordFlag = true;
      isError = true;
      errors.conformPasswordError = "Passwords didn't match.";
    }

    if (this.state.conformPassword.length == 0) {
      errors.conformPasswordFlag = true;
      isError = true;
      errors.passwordError = "";
      errors.conformPasswordError = "Confirm your password";
    }

    if(this.state.conformPassword.length == 0 && this.state.password.length == 0){
      errors.passwordFlag = true;
      errors.conformPasswordFlag = true;
      isError = true;
      errors.passwordError = "Enter a password";
      errors.conformPasswordError = "";
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
        emailFlag: false,
        emailError: "",
        passwordFlag: false,
        passwordError: "",
        conformPasswordFlag: false,
        conformPasswordError: ""
      });
      let registrationData = {"firstName": this.state.firstName,
      "lastName": this.state.lastName,
       "service": "Advance",
       "email": this.state.email,
      "password":this.state.password}
      service.Registration(registrationData)
      .then((registrationData) => {
        let obj = JSON.stringify(registrationData);
        console.log("Registration successful"+obj)
        // this.successAlert();
      })
      .catch((registrationData) => {
        console.log("Registration Failed"+registrationData);
        // this.failedAlert();
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
                    className="emailField"
                    name="email"
                    helperText={this.state.emailError}
                    error={this.state.emailFlag}
                    onChange={e => this.change(e)}
                    label="email"
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
                    onChange={e => this.change(e)}
                    error={this.state.passwordFlag}
                    helperText={this.state.passwordError}
                    fullWidth
                    type="password"
                    variant="outlined"
                  />
                </div>
                <div className="inputField">
                  <TextField
                    size="small"
                    id="password"
                    label="Confirm"
                    name="conformPassword"
                    onChange={e => this.change(e)}
                    helperText={this.state.conformPasswordError}
                    error={this.state.conformPasswordFlag}
                    fullWidth
                    type="password"
                    variant="outlined"
                  />
                </div>
              </div>
              <span className="checkBoxInputs">
                <Checkbox
                  defaultChecked
                  id="passCheck"
                  color="primary"
                  className="showPass"
                />
                Show Password
              </span>
              <div className="footerButtons">
          <div className='signInLink'><Button color="primary" onClick={() => this.nextPath('../login')}>Sign In insted</Button></div>
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
