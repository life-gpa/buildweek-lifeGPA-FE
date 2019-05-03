import React from 'react';

import Habit from './Habit';
import HabitForm from './HabitForm';

class HabitList extends React.Component {
  constructor(props) {
    super(props);

    this.pregenHabits = [
      { habit_name: 'asdf', score: 4 },
      { habit_name: 'asdfg', score: 3 },
      { habit_name: 'asdfgh', score: 1 },
      { habit_name: 'asdfghj', score: 3 },
      { habit_name: 'asdfghjk', score: 2 }
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
        return currItem.habit_name === item.habit_name && currItem.score === item.score
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
      habit_name: this.state.newHabitName,
      score: this.state.newHabitScore
    }
    if (newHabit.habit_name) {
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
          ({ habit_name, score }) => {
            return (
              <Habit key={`${habit_name}${score}`} name={habit_name} score={score} />
            )
          }
        )}
        <HabitForm newHabitName={newHabitName} newHabitScore={newHabitScore} handleText={this.handleText} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default HabitList;
