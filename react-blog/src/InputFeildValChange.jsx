import React, { useState } from 'react'

export default function InputFeildValChange() {
    const[val,setVal]= useState("")
  return (
    <div>
        <h1>Get Input Feild Value</h1>
        <input type="text" value={val} onChange={(event)=> setVal(event.target.value)}
         placeholder='Enter Your Name' style={{padding:"10px",marginBottom: "20px"}} />

         <h1>{val}</h1>
        <button onClick={()=> setVal("")}>Clear Value</button>
      
    </div>
  )
}
