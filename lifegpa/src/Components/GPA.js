import React from 'react';

const GPA = props => {

  const gpaScore = props.apiList.reduce(((acc, currHabit) => acc + Number(currHabit.score)), 0) / props.apiList.length

  return (
    <div className='GPA'>
      <h1 className='Initial'>LifeGPA</h1>

      <h2 className='Total'>{gpaScore.toFixed(2)}</h2>
    </div>
  )
}

export default GPA;