import React, { useEffect, useState } from 'react'

const UseEffects = () => {
    
    const[data, setData] = useState([])
    const fetchdata = ()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((json)=>{
            setData(json)
        })
    }

    useEffect(()=>{
        fetchdata()
    },[])

  return (
    
   <div>
        {data.map((item)=>(
            <li id={item.id}>{item.title}</li>
        ))}
   </div>
    
  );
}

export default UseEffects