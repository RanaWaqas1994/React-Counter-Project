import React from 'react'
import { use } from 'react';

export default function UseApiForUser({userResource}) {
    // console.log(userResource)
    const UserData = use(userResource)
    console.log(UserData.users);
    
  return (
    <div>
        <h1>Users Lists</h1>
        {
        UserData?.users?.map((user,index)=>(
            <ul className='user-lists' key={index}>
                <li className='user-list'>{user.firstName}</li>
                <li className='user-list'>{user.lastName}</li>
                <li className='user-list'>{user.age}</li>
                </ul>
        ))
        }
      
    </div>
  )
}
