import { useEffect, useState } from "react"

const ApiDemo = () => {

    const[data, setData]=useState([])
    const fetchData = () =>{
        fetch("https://jsonplaceholder.typicode.com/posts")
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
            <li id={r.id}>{r.title}</li>
        ))}
    </div>
  )
}

export default ApiDemo