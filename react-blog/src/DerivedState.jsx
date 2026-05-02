import React, { useState } from 'react'

export default function DerivedState() {
    const[users,setUsers]=useState([])
    const[user,setUser]=useState('')

    const ShowUsers = ()=>{
        setUsers([...users,user])
        console.log(user);
        
    }
    const Total = users.length;
    const Old = users[users.length - 1]
    const Unique= [...new Set(users)].length
    
  return (
    <div>
        <h1>Derived State in React JS</h1>
        <h2>Total Users:{Total} </h2>
        <h2>Old User: {Old}</h2>
        <h2>Unique Users: {Unique} </h2>
        <input type="text" onChange={(event)=>setUser(event.target.value)} placeholder='Add new User' />

        <button onClick={ShowUsers}>Add User</button>

        {
            users.map((item,index)=>(
                <h3 key={index}> {item} </h3>
            ))
        }

      
    </div>
  )
}
