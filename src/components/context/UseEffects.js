import React, { useEffect, useState } from 'react'

const UseEffects = () => {
    
    const[data, setData] = useState([])
    const fetchdata = ()=>{
        fetch("http://localhost:8181/products")
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
            <li id={item.id}>{item.description}</li>
        ))}
   </div>
    
  );
}

export default UseEffects