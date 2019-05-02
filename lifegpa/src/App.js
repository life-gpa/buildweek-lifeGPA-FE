import React from 'react';
import { Route } from "react-router-dom";
import Login from './Components/Login';
<<<<<<< HEAD
import SignUp from './Components/SignUp';
import { HomePage } from './Components/HomePage';
import './App.css';
=======
import Signup from './Components/Signup';
import HomePage from './Components/Homepage';
import LaunchPage from './Components/LaunchPage';
>>>>>>> de765dea8cd517d5ac6e162919f7c1aefef40490

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