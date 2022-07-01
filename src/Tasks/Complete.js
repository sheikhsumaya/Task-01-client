import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Complete = ({task, handleToDelete, index }) => {
  const { AddTask, Description, Date} = task;
  const [checked, setChecked] = useState(false);

  const handleToDone = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
    toast('Completed Tasks Successfully!')
    
  };
  return (
    <div>
      <div>
        <tr className="grid lg:gap-12 grid-cols-5 ">
          <th className="">{index + 1}</th>
          <td className="">
            <span>
              <input
                className="lg:text-4xl"
                name="done"
                value={checked.done}
                onChange={handleToDone}
                type="checkbox"
              />
              <span
                className={`${checked.done === true ? "line-through" : ""}`}
              >{AddTask}
              </span>
            </span>
          </td>
          <td className="">{Description}</td>
          <td className="">{Date}</td>

          <td className="">
            {" "}
            <button
              onClick={() => handleToDelete(task._id)}
              className="btn btn-primary" 
            >
              Delete
            </button>
          </td>
        </tr>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Complete;


