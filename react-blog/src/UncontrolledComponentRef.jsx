import React, { useRef } from 'react'

export default function UncontrolledComponentRef() {
    const handleForm = (event)=> {
        event.preventDefault();
        const user = document.querySelector("#userName").value;
        const password = document.querySelector("#userPassword").value;
        console.log("User Name",user)
        console.log("User Password",password)
    }
    const UserRef=useRef()
    const PasswordRef=useRef()
    const handleFormRef = (event)=> {
        const user = UserRef.current.value
        const password = UserRef.current.value
        event.preventDefault();
        console.log("handleFormRef")
        console.log("User",user)
        console.log("Password",password)

    } 
  return (
    <div>
        <hr />
        <h1>This is uncontrolled Component</h1>
        <form action="" method="post" onSubmit={handleForm}>
            <input type="text" placeholder='Enter Your Name' id='userName' />
            <br /><br />
            <input type="password" name="" id="userPassword" placeholder='Enter Password' /> 
            <br /><br />
            <button className='btn btn-primary'>Submit</button>
        </form>
              <hr />
        <h1>This is uncontrolled Component using useRef</h1>
        <form action="" method="post" onSubmit={handleFormRef}>
            <input type="text" placeholder='Enter Your Name'
             id='userNameRef' ref={UserRef} />
            <br /><br />
            <input type="password" name="" id="userPasswordRef"
             placeholder='Enter Password' ref={PasswordRef} /> 
            <br /><br />
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}
