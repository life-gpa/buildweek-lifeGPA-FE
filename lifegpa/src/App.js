import React, { Component } from 'react';
import { Route} from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import HomePage from './Components/Homepage';
import StartPage from './Components/StartPage';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Route path="/" exact render={props => <StartPage {...props}/>} />
          <Route path="/signup" render={props => <Signup {...props} />} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/home" render={props => <HomePage {...props} />} />
        </div>
    );
  }
}

export default App;