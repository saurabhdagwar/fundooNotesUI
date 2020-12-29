import './App.css';
import Signup from './components/signup/signup.jsx'
import SignIn from './components/signIn/signIn.jsx'
import ForgotPass from './components/forgotPassword/forgotPass.jsx'
import ResetPass from "./components/resetPassword/resetPassword.jsx"
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Switch>
      <Route path="/registration" component={Signup} exact />
      <Route path="/login" component={SignIn} exact />
      <Route path="/forgotPassword" component={ForgotPass} exact />
      <Route path="/ResetPassword" component={ResetPass} exact />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
