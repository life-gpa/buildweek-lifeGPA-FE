import React from 'react';
import axios from 'axios';

class Habit extends React.Component {
  render() {
    return (
      <div className='habit'>
        <p>{this.props.name}<span className='score'> {this.props.score}</span></p>
      </div>
    )
  }
}

export default Habit;