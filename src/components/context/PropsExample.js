import React from 'react'

const PropsExample = (props) => {
  return (
    <div>
        <h1>
            hello {props.name} {props.title}
        </h1>
    </div>
  )
}

export default PropsExample