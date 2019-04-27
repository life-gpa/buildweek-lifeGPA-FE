import React from 'react';
import axios from 'axios';
import Launchpage from './Components/Launchpage';
import { Route } from 'react-router-dom';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import { HomePage } from './Components/HomePage';



import './App.css';


function App() {
  return (
    <div className="App">
    <Route exact path="/" component={Launchpage}/>
    <Route exact path="/SignUp" component={SignUp}/>
    <Route exact path="/Login" component={Login}/>
    <Route exact path="/HomePage" component={HomePage}/>
    </div>
  );
}

export default App;
