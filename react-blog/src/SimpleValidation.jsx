import React, { useState } from 'react'

export default function SimpleValidation() {
    // const [formName,setFormName] =useState("")
    const [ErrFormName,setErrFormName]= useState()
    // const [formPass,setFormPass] =useState()
    const [ErrFormPass,setErrFormPass]= useState()
    const handleName = (event)=>{
        console.log(event.target.value);
        if(event.target.value.length >5){
            setErrFormName("Enter Valid name only 5 character Allowed")
        }
        else {
            setErrFormName()
        }    
        
    }

        const handlePassword = (event)=>{
        let regex = /^[A-Z0-9]+$/i;
        if(regex.test(event.target.value)){
            setErrFormPass()
           
        }
        else {
             setErrFormPass("Enter Valid password Only character and Numbers allowed")
        }    
        
    }

  return (
    <div>
        <h1>Simple Validation</h1>
        <input className={ErrFormName? "error": " "} type="text" onChange={handleName}
         placeholder='Enter Name' />
        <span className='red'>{ErrFormName && ErrFormName}</span>
        <br /><br />
        <input className={ErrFormPass? "error": " "} type="text" 
        placeholder='Enter Password' onChange={handlePassword} />
        <span className='red'>{ErrFormPass && ErrFormPass}</span>
        <br /><br />
        <input type="Submit" disabled={ErrFormName || ErrFormPass} />

    </div>
  )
}
