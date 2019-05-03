import React from 'react';

class Percentages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      habitCount: [],
      dayLimit: 30
    }
  }

  changeDayLimit = e => {
    this.setState({
      dayLimit: Number(e.target.value)
    })
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

    return tempHabitCountList;
  }

  componentDidMount() {
    this.setState({
      habitCount: this.tallyHabits()
    })
  }

  render() {
    const { habitCount, dayLimit } = this.state;
    return (
      <div className='percentages'>
        <h3>How many days back do you want your percentages for?</h3>
        <select name='dayLimit' onChange={this.changeDayLimit} className='dropdown'>
          <option value='30'>30 Days</option>
          <option value='60'>60 Days</option>
          <option value='90'>90 Days</option>
        </select>

        {habitCount.map(habit => {
          return (
            <div key={habit.habit_name} >
              <p>Percentage for {habit.habit_name}: {Math.round(habit.count / dayLimit * 100)}%</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Percentages;