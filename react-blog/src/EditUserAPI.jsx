import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export default function EditUserAPI() {
    const {id} = useParams();

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const URL= "http://localhost:3000/users/" + id;
    const navigate = useNavigate();


    // console.log(id);

    useEffect(()=>{
        getUserData();
    },[])
    
    const getUserData = async ()=>{

        console.log(URL)
        let response = await fetch(URL);
        response = await response.json()
          console.log(response)
          setName(response.name)
          setEmail(response.email)
          setAge(response.age)
    }

    const updateUserData = async ()=> {
        console.log(name,email,age);
        let response = await fetch(URL, {
            method:"Put",
            body: JSON.stringify({name,email,age})
        })
        response = await response.json();
        console.log(response);
        alert("User Data Updated")
        navigate("/")
        
        
    }

  return (
    <div style={{textAlign:"center"}}>
      <h1> Edit User Details</h1>
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Enter Name' />
      <br /><br />
      <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Email' />
      <br /><br />
      <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder='Enter Age' />
      <br /><br />
      <button onClick={updateUserData}>Update User</button>
    </div>
  )
}
