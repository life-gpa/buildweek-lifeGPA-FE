import React from 'react';

class Percentages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      habitCount: []
    }
  }

  tallyHabits = () => {
    let habits = this.props.apiList;
    let tempHabitCount = {};

    for (let i = 0; i < habits.length; i++) {
      let currHabit = habits[i].habit_name
      if (tempHabitCount[currHabit]) {
        tempHabitCount[currHabit]++
      } else {
        tempHabitCount[currHabit] = 1;
      }
    }

    let tempHabitCountList = [];

    for (let name in tempHabitCount) {
      tempHabitCountList.push({
        habit_name: name,
        count: tempHabitCount[name]
      })
    }

    console.log(tempHabitCountList);

    return tempHabitCountList;
  }

  componentDidMount() {
    this.setState({
      habitCount: this.tallyHabits()
    })
  }

  render() {
    return (
      <div className='percentages'>
        {this.state.habitCount.map(habit => {
          return (
            <div key={habit.habit_name} >
              <p>Percentage for {habit.habit_name}: {Math.round(habit.count / 30 * 100)}%</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Percentages;