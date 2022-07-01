import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-blue-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-primary btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-blue-100 rounded-box w-52"
            >
              <li>
                <Link  className="text-l" to="/">Home</Link >
              </li>
              <li>
                <Link to="/calender">Calender</Link>
              </li>
              <li>
              <Link to="/todo">To Do</Link>
              </li>
              <li>
              <Link to="/completed">Completed Tasks</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <Link to="/" className="btn btn-primary normal-case text-xl bold">Back To Home</Link>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
