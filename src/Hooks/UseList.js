import { useEffect, useState } from 'react';

const UseList = () => {
    const [ tasksList,setTasksList] = useState([]);

    useEffect(()=>{
        fetch(' https://intense-fortress-95385.herokuapp.com/tasks')
     
        .then(res =>res.json())
        .then(data =>{
            setTasksList(data)
            console.log(data)
        })
    },[]);
    return [ tasksList,setTasksList]
};

export default UseList;