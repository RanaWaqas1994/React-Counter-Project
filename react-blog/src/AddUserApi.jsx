import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function AddUserApi() {
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const navigate = useNavigate("")

    const createUser = async ()=> {
        console.log(name,age,email);
        let APIurl= "http://localhost:3000/users"
        //abh hum post method use kar rahe han tw abh hum fetch url ko change karain ge like:
        let APIresponse = await fetch(APIurl,{
            method:"Post",
            body:JSON.stringify({name,age,email})
        });
        APIresponse = await APIresponse.json()
        alert("User Added")
        navigate("/")
        
    }
  return (
    <div style={{textAlign:'center'}}>
      <h1>Add New User to API</h1>
      <input type="text" placeholder='Enter Name'
       onChange={(event)=>setName(event.target.value)} />
      <br /><br />
      <input type="text" placeholder='Enter Age' 
       onChange={(event)=>setAge(event.target.value)}/>
      <br /><br />
      <input type="text" placeholder='Enter Email'
       onChange={(event)=>setEmail(event.target.value)} />
      <br /><br />
      <button onClick={createUser}>Submit</button>
    </div>
  )
}
