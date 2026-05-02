import React, { useState } from 'react'

export default function ControlledComponent() {
    const[fromName,setFormName]= useState("")
    const[fromEmail,setFormEmail]= useState("")
    const[fromNumber,setFormNumber]= useState("")
  return (
    <div>
        <h1>Controlled Component in Form</h1>
        <form action="" method="get">
            <input type="text" value={fromName} onChange={(event)=> setFormName(event.target.value)} placeholder='Enter Name'/> <br /><br />
            <input type="email" value={fromEmail} onChange={(event)=> setFormEmail(event.target.value)}  placeholder='Enter Email' /><br /><br />
            <input type="number" value={fromNumber} onChange={(event)=> setFormNumber(event.target.value)}   placeholder='Enter Number'/><br /><br />
            <input type="button" value="Submit" /> <br /> <br />
            <input type="button" value="CLear"
             onClick={()=> {setFormName("");setFormEmail("");setFormNumber("")}} />
            <br />
            <h2> {fromName} </h2>
            <h2> {fromEmail} </h2>
            <h2> {fromNumber} </h2>

        </form>
      
    </div>
  )
}
