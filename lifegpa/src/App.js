import React, { Component } from 'react';

import './App.css';
import Loginscreen from './Components/LoginScreen'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
    }
  }



  componentWillMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
      </div>
    );
  }
}

export default App;