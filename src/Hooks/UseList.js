import { useEffect, useState } from 'react';

const UseList = () => {
    const [ tasksList,setTasksList] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/tasks')
     
        .then(res =>res.json())
        .then(data =>{
            setTasksList(data)
            console.log(data)
        })
    },[]);
    return [ tasksList,setTasksList]
};

export default UseList;