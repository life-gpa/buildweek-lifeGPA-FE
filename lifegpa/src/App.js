import React, { Component } from 'react';
import { Route} from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/Homepage';




import './App.css';


  

class App extends Component {

  render() {
    return (
        <div className="App">
          <Route path="/register" render={props => <Register {...props} />} />
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/home" render={props => <HomePage {...props} />} />
        </div>
    );
  }
}

export default App;