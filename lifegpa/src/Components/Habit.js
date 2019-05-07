import React from 'react';

import { Button } from 'reactstrap';

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
        this.setState({
          completed: true
        })
      })
      .catch(err => {
        console.log(`Error : ${err.message}`)
      })
    this.setState({
      completed: true
    })

  }

  render() {
    return (
      <div className={`habit ${ this.state.completed ? 'completed' : ''}`}>
        <div class="habits">
          <p>{this.props.name} </p>
          <p><span className='score'> {this.props.score}</span> </p>
        </div>
        <Button color="secondary" onClick={this.handleButton}>Complete</Button>
      </div>
    )
  }
}

export default Habit;