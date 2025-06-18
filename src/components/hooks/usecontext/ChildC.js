import React, { useContext } from 'react'
import { FirstName, LastName } from './ChildA'
const ChildC = () => {

  const fname = useContext(FirstName)
  const lname = useContext(LastName)

  return (
    <div>
      My Name is {fname} and {lname}
    
    </div>
  )
}

export default ChildC