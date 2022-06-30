
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import {Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Footer from './Pages/Footer/Footer';
import Calendar from './Tasks/Calendar';
import ToDo from './Tasks/ToDo';
import AllTasks from './Tasks/AllTasks';


function App() {
  
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/calender' element={<Calendar></Calendar>}></Route>
         <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/completed' element={<AllTasks></AllTasks>}></Route> 
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
