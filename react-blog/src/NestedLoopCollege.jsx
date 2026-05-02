import React from 'react'
import NestedLoopStudents from './NestedLoopStudents';

export default function NestedLoopCollege({institute}) {
    // console.log(institute);
    
  return (
    <div style={{background: "lightgrey", padding:"20px",
    border:"5px solid red",borderRadius:"5px", color:"Black",
    margin:"10px 3px", width: "29%", float: "left"}}>
        <h2>Name: {institute.name}</h2>
        <ul style={{border:"2px solid black", margin: "10px auto",
                            borderRadius: "5px"
                        }}>
            <li>
                Class: {institute.class}
            </li>
            <li>
                Time: {institute.time}
            </li>
            <li>
                <NestedLoopStudents institute={institute.student}/>
            </li>
        </ul>      
    </div>
  )
}
