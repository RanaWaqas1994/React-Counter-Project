import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export default function UserList() {
// Loading ke liye hum state lain ge
    const[loading,setLoading] = useState(false)
    const [userJsonData,setUserJsonData]= useState([])
    const navigate = useNavigate()
    let newUrl= "http://localhost:3000/users";

    useEffect(()=>{
        //Jese hi API call hona start ho tbh hum loading True kar dain ge
        setLoading(true);
        getJsonUserData();
        
    },[])
    
    const getJsonUserData = async()=>{
      
        let NewResponse = await fetch(newUrl)
        NewResponse = await NewResponse.json();
        console.log(NewResponse);
        //yeah 2
        setUserJsonData(NewResponse);
        setLoading(false);

        // Agr khudse delay dalna ha tabh warna upar jo 2 comment kiye han usko khol ke sath me 
        //network pr "no Trotting" ko "3g karke" check karo

//   setTimeout(() => {
//     setUserJsonData(NewResponse);
//     setLoading(false);
//   }, 5000);
    }


    // Delete User API
    const DeleteUser = async(id)=>{
        let NewResponse = await fetch(newUrl + "/" + id,{
            method: "delete"
        })
        NewResponse = await NewResponse.json() 
        console.log(id,"Record Deleted");
        getJsonUserData();
        

    }

    // Edit User
    const EditUser = (id)=> {
            //User sabse pehle navigate karna ha tw Naviagte Hook lagayen ge
            navigate("/edit/" + id)
    }
    
  return (
    <div className='test'>

        <h1>Make Routes and Pages for Add User and  User List UI</h1>
                <ul className='user-list head'>
                    <li>First Name</li>
                    <li>Age</li>
                    <li>Email</li>
                    <li>Action</li>
                </ul>
        {  
            !loading?
            userJsonData.map((user,index)=>(
                
                <ul key={index} className='user-list'>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                    <li>{user.email}</li>
                    <li><button onClick={()=>DeleteUser(user.id)}>Delete</button>
                        <button onClick={()=>EditUser(user.id)}>Edit</button>
                    </li>
                </ul>
               
            )):<h1>Data is Loading</h1>
        }
      
    </div>
  )
}
