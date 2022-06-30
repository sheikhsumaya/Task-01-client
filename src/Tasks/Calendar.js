import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h1 className="text-4xl font-bold text-center m-5">Calender</h1>
      <div className='grid justify-items-center mb-32 mt-32'>
      <DayPicker
      mode= "single"
      selected={date}
      onSelect={setDate} 
      />
      <p>You have selected: {format(date, 'PP')}</p>
      </div>
      
    </div>
  );
};

export default Calendar;