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
  const { pregenHabits } = this.state;
    const combinedList = [...pregenHabits, ...apiList]
    let filteredList = combinedList.filter((item, index, arr) => {
      return arr.findIndex(currItem => {
        return currItem.name === item.name && currItem.score === item.score
      }) === index;
    });
    return filteredList;
  }

  render() {
    const { apiList } = this.props;
    return (
      <div className='habitList'>
        {this.combineAndReduceHabitLists(apiList).map(
          ({ name, score }) => {
            return (
              <Habit key={name} name={name} score={score} user={this.props.user}/>
            )
          }
        )}
      </div>
    )
  }
}

export default HabitList;
