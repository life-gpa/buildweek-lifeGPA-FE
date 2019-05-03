import React from 'react';

const HabitForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className='habitForm'>
      <input type='text' name='newHabitName' placeholder='Write a new habit' value={props.newHabitName} onChange={props.handleText} />
      <input type='number' name='newHabitScore' min='1' max='4' value={props.newHabitScore} onChange={props.handleText} />
      <input type='submit' value='Create New Habit' />
    </form>
  )
}

export default HabitForm;