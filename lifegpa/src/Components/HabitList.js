import React from 'react';
import axios from 'axios';

import Habit from './Habit';
import HabitForm from './HabitForm';

// Component requires prop from HomePage containing list of habits from api

class HabitList extends React.Component {
  constructor(props) {
    super(props);

    this.pregenHabits = [
      { name: 'asdf', score: 4 },
      { name: 'asdfg', score: 3 },
      { name: 'asdfgh', score: 1 },
      { name: 'asdfghj', score: 3 },
      { name: 'asdfghjk', score: 2 }
    ];

    this.state = {
      habitList: [],
      newHabitName: '',
      newHabitScore: ''
    }
  }

  combineAndReduceHabitLists = apiList => {
    const combinedList = [...this.pregenHabits, ...apiList]
    let filteredList = combinedList.filter((item, index, arr) => {
      return arr.findIndex(currItem => {
        return currItem.name === item.name && currItem.score === item.score
      }) === index;
    });
    return filteredList;
  }

  handleText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  addNewHabit = () => {
    const newHabit = {
      name: this.state.newHabitName,
      score: this.state.newHabitScore
    }
    if (newHabit.name) {
      this.setState(prevState => {
        return {
          habitList: [
            ...prevState.habitList,
            newHabit
          ]
        }
      })
    } else {
      console.log('You need a habit name or a score that makes sense!');
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.addNewHabit();
    this.setState({
      newHabitName: '',
      newHabitScore: ''
    })
  }

  componentDidMount() {
    this.setState({
      habitList: this.combineAndReduceHabitLists(this.props.apiList)
    })
  }

  render() {
    const { habitList, newHabitName, newHabitScore } = this.state;
    return (
      <div className='habitList'>
        {habitList.map(
          ({ name, score }) => {
            return (
              <Habit key={`${name}${score}`} name={name} score={score} />
            )
          }
        )}
        <HabitForm newHabitName={newHabitName} newHabitScore={newHabitScore} handleText={this.handleText} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default HabitList;
