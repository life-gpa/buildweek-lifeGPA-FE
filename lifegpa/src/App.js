import React from 'react';
import { Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import HomePage from './Components/Homepage';
import LaunchPage from './Components/LaunchPage';

function App() {
    return (
        <div className="App">
          <Route path="/" exact render={props => <LaunchPage {...props}/>} />
          <Route path="/signup" render={props => <Signup {...props} />} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/home" render={props => <HomePage {...props} />} />
        </div>
    );
  }


export default App;