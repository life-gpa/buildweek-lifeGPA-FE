import React from 'react';
import axios from 'axios';

import Habit from './Habit';

// Component requires prop from App containing list of habits from api

class HabitList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pregenHabits: [
        { name: 'asdf', score: 4 },
        { name: 'asdfg', score: 3 },
        { name: 'asdfgh', score: 1 },
        { name: 'asdfghj', score: 3 },
        { name: 'asdfghjk', score: 2 }
      ]
    }
  }

  combineAndReduceHabitLists = apiList => {
    let combinedList = this.state.pregenHabits.concat(apiList);
    let filteredList = combinedList.filter((item, index, arr) => {
      return arr.findIndex(x => {
        return x.name === item.name && x.score === item.score
      }) === index;
    });
    console.log(filteredList);
    return filteredList;
  }

  render() {
    return (
      <div className='habitList'>
        {this.combineAndReduceHabitLists(this.props.apiList).map(
          (habit, index) => {
            return (
              <Habit key={index} name={habit.name} score={habit.score} />
            )
          }
        )}
      </div>
    )
  }
}

export default HabitList;