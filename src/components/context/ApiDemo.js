import { useEffect, useState } from "react"

const ApiDemo = () => {

    const[data, setData]=useState([])
    const fetchData = () =>{
        fetch("http://localhost:8181/products")
        .then((res)=>res.json())
        .then((json)=>{
            setData(json)
        })
    }

    useEffect(()=>{
        fetchData()
    },[])
  
  return (
    <div>
        {data.map((r)=>(
            <li id={r.id}>{r.name}</li>
        ))}
    </div>
  )
}

export default ApiDemo