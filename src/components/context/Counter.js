import React, { useState } from 'react'

function Counter() {

    const[count, setCount] = useState(0);

    const rendrFun = ()=>{
      setCount(count+1);
    }

  return (
    <div>
      <p>{count}</p>
      <button onClick={rendrFun}>click kro</button>
    </div>
    
    
  )
}

export default Counter