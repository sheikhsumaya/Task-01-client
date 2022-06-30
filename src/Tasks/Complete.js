import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Complete = ({task, handleToDelete, index }) => {
  const { AddTask, Description, Date} = task;
  const [checked, setChecked] = useState(false);

  const handleToDone = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
    toast("Done");
  };
  return (
    <div>
      <div>
        <tr className="px-20 ">
          <th className="px-20 ">{index + 1}</th>
          <td className="px-20">
            <span>
              <input
                className="text-4xl"
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
          <td className="px-20">{Description}</td>

          <td className="px-20">
            {" "}
            <button
              onClick={() => handleToDelete( task._id)}
              className="btn btn-accent" 
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
