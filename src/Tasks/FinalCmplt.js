import React from 'react';

const FinalCmplt = ({task}) => {
  const { AddTask, Description, Date} = task;
  return (
    <div>
      <h1>{AddTask}</h1>
      <h1>{Description}</h1>
      <h1>{Date}</h1>
    </div>
  );
};

export default FinalCmplt;