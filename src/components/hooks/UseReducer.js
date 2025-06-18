import React, { useReducer } from 'react'

const reducer = (state, action)=>{
  if(action.type==='incremented_age'){
    return {
      age: state.age+1
    };
  }
  throw Error('Unknown action.');
}

const UseReducer = () => {

  // const [state, dispatch] = useReducer(reducer, initialArg, init?)

  const[state, dispatch] = useReducer(reducer, {age:42});

  return (
    <div>
      <button onClick={()=>{
        dispatch({type: 'increment_age'})
      }}>Increment Age</button>
      <p>Hello! you are {state.age}.</p>
    </div>
  )
}

export default UseReducer