import React from 'react';
import axios from 'axios';

import authentication from "../Authentication/authentication";

class Habit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  handleButton = e => {
    e.preventDefault();
    authentication()
      .post('https://gentle-ridge-32500.herokuapp.com/api/new_habit', {
        habit_name: this.props.name,
        score: this.props.score
      })
      .then(res => {
        console.log(res);
        this.setState({
          completed: true
        })
      })
      .catch(err => {
        console.error(err);
      })
    this.setState({
      completed: true
    })

  }

  render() {
    return (
      <div className={`habit ${ this.state.completed ? 'completed' : ''}`}>
        <p>{this.props.name}<span className='score'> {this.props.score}</span></p>
        <button onClick={this.handleButton}>Complete</button>
      </div>
    )
  }
}

export default Habit;