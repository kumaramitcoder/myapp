import React, { useContext } from 'react'
import { GlobalInfo } from './UseContextt'

const UseContextChild = () => {
    const {appColor} = useContext(GlobalInfo);
  return (
    <div>UseContextChil
        <h1 style={{color:appColor}}>Child Component</h1>
    </div>
  )
}

export default UseContextChild