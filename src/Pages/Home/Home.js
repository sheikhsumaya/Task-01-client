import React from "react";
import {Link} from "react-router-dom";
import AllTasks from "../../Tasks/AllTasks";

const Home = () => {
  return (
    <div className=" items-center text-center">
      {/* <h1 className="mb-24 text-4xl font-bold text-center mt-5">Welcome About Tasks</h1> */}

    <div className="mb-10">
    <Link className="text-primary text-4xl" to="/todo">Add New Tasks</Link>
    </div>
   <AllTasks></AllTasks>
    </div>
  );
};

export default Home;
