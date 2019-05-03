import React from 'react';

const GPA = props => {

  const gpa = props.apiList.reduce(((acc, currHabit) => acc + Number(currHabit.score)), 0) / props.apiList.length

  return (
    <div className='GPA'>
      <h1 className='Initial'>Life GPA 4.0</h1>

      <h2 className='Total'>{gpa.toFixed(2)}</h2>
    </div>
  )
}

export default GPA;