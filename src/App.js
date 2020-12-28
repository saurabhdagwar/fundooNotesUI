import './App.css';
import Signup from './components/signup/sugnup.jsx'
import SignIn from './components/signIn/signIn.jsx'
import ForgotPass from './components/forgotPassword/forgotPass.jsx'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Switch>
      <Route path="/registration" component={Signup} exact />
      <Route path="/login" component={SignIn} exact />
      <Route path="/forgotPass" component={ForgotPass} exact />
      </Switch>
      </BrowserRouter>

    
    </div>
  );
}

export default App;
