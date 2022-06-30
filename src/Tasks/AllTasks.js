import React from "react";
import { toast,} from "react-toastify";
import UseList from "../Hooks/UseList";
import Complete from "./Complete";

const AllTasks = () => {
  const [tasks, setTasks] = UseList();

  // delete items

  const handleToDelete = id => {
    const confirm = window.confirm("Want to delete this item?");
    if (confirm) {
      fetch(`http://localhost:5000/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restItems = tasks.filter((tasks) => tasks._id !== id);
          setTasks(restItems);
          toast("Delete Successfull");
        });
    }
  };

  return (
    <div>
      <div className="p-20 m-20 ">
        <h2 className="text-4xl text-center py-2">All Tasks:{tasks.length}</h2>
        <div>
          <table class="table justify-items-center">
            
            <tbody>
              {tasks.map((task, index) => (
                <Complete
                  task={task}
                  key={task._id}
                  handleToDelete={handleToDelete}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
