import React from 'react'

export default function LiftingUpState({SetLiftingUser}) {
   
  return (
    <div>
        <h1>Lifting State Up in React js and Add User </h1>
        <input type="text" placeholder='Enter Username' onChange={(event)=>SetLiftingUser(event.target.value)} />
        <hr />
      
    </div>
  )
}
