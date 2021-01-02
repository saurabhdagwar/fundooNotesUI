import React from "react";
import "./App.css";
import Signup from "./components/signup/signup.jsx";
import SignIn from "./components/signIn/signIn.jsx";
import ForgotPass from "./components/forgotPassword/forgotPass.jsx";
import ResetPass from "./components/resetPassword/resetPassword.jsx";
import Dashboard from "./components/dashbord/dashboard.jsx"
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {

  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/registration" component={Signup} exact />
            <Route path="/login" component={SignIn} exact />
            <Route path="/forgotPassword" component={ForgotPass} exact />
            <Route path="/resetpassword/:token" component={ResetPass} exact />
            <Route path="/dashboard" component={Dashboard} exact />
          </Switch>
          
        </BrowserRouter>
      </div>
     
    </div>
  );
}

export default App;
