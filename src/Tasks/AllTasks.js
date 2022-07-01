import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseList from "../Hooks/UseList";
import Complete from "./Complete";

const AllTasks = () => {
  const [tasks, setTasks] = UseList();

  // delete items

  const handleToDelete = (id) => {
    const confirm = window.confirm("Want to delete this item?");
    if (confirm) {
      fetch(`https://intense-fortress-95385.herokuapp.com/tasks${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const restItems = tasks.filter((task) => task._id !== id);
          setTasks(restItems);
          toast("Delete Successfully!");
        });
    }
  };

  return (
    <div>
      <div className="lg:px-20 lg:mx-20 ">
        <h2 className="text-4xl text-center mb-10 py-4">Your Tasks:{tasks.length}</h2>
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default AllTasks;
