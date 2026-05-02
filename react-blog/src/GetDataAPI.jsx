import React, { useEffect, useState } from 'react'

export default function GetDataAPI() {

const [userData,SetUserData] = useState([]);

    const GetUserData = async()=>{
        const url= "https://dummyjson.com/users";
        let response = await fetch(url);
            response = await response.json();
            // console.log(response.users,"Just User Show");
            //Abh api call ho gai console me abh isko store karne ke liye State banayen ge
            SetUserData(response.users)
            
    }
   // console.log(userData,"State User Data Called");
            useEffect(()=>{
        GetUserData();
    },[])

  return (
    <div>
        <h1>Get Data From the API</h1>
                <ul className='user-list head'>
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Age</li>
                </ul>
        {
            // userData &&  yeah likho tw faida yeah ha ke kabhi kabi data ane me time lagta ha
            //tw hum && yeah lagte han ke agr data undefined ni ha tw && laga ke render karo
           userData && userData.map((user,index)=>(
                <ul key={index} className='user-list'>
                    <li>{user.firstName}</li>
                    <li>{user.lastName}</li>
                    <li>{user.age}</li>
                </ul>
           ))
        }
      
    </div>
  )
}
