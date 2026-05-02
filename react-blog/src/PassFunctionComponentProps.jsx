import React from 'react'

export default function PassFunctionComponentProps({PassFunction,name,NewUserAge,age}) {
  return (
    <div>
        <hr />
        <h1>Pass Function in Component as Props</h1>
        <button onClick={()=> PassFunction(name)} >Click to show Main Component</button>
        <button onClick={()=> NewUserAge(age)} >Click to Age Main Component</button>
        
    </div>
  )
}
