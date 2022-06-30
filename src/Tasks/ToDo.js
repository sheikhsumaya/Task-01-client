import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ToDo = () => {
  const [date, setDate] = useState();
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{
     
   console.log(data);
   const url = 'http://localhost:5000/tasks'
// const url = 'https://limitless-river-03333.herokuapp.com/toDoList'
console.log(url);
fetch(url, {
    method:'POST',
    headers: {
        'content-type':'application/json'
    },
    body:JSON.stringify(data)
})
.then(res =>res.json())
.then(result =>{
    console.log(result);
    if (result) {
        toast('Added successfully')
    }
   
  
})



    reset()
  };

 
  return (
    <div className='text-center '>
      <h1  className="text-4xl font-bold text-center m-5">You Have To Do</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='text-center form-control justify-items-center gap-5 grid grid-row-2'>
      <input type="text" placeholder="What to do?" className="input input-bordered input-info w-full max-w-xs" {...register("AddTask")} />
      
      <input  placeholder="Description" class="input input-bordered w-full max-w-xs my-2"  {...register("Description", { required: true })} />
      
      <input type="date" className="input input-bordered input-info w-full max-w-xs" {...register("Date", { required: true })}
       onChange={(e)=>setDate(e.target.value)}/>
       <input class="btn btn-info my-3"  value='submit' type="submit" />
      <p>Selected Date: {date}</p>
     </div>
     </form>
    </div>
  );
};

export default ToDo;