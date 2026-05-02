import React, { useId } from 'react'

export default function UseIDHook() {

  return (
    <div>
        <UseIDHookNew/>
        <hr />
        <UseIDHookNew/>

    </div>
  )
}

function UseIDHookNew() {
    const user = useId()
  return (
    <div>
        <form action="">
            <label htmlFor={user + "name"}> Your Name</label> <br />
            <input id={user + "name"} type="text" placeholder='Add Your name' /><br />
            <label htmlFor={user + "password"}> Your Password</label> <br />
            <input id={user+ "password"} type="password" placeholder='Add Your name' />
            <br /><br />
            <input type="checkbox" id={user + "Terms"} />
            <label htmlFor={user + "Terms"}>Terms and Condition</label>
        </form>
      
    </div>
  )
}