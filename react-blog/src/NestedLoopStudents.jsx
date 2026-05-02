import React from 'react'

export default function NestedLoopStudents({institute}) {
  return (
    <div>
      <h4 style={{margin:"0px"}}>Students</h4>
                {
                    institute.map((institute,index)=>(
                        <ul key={index} style={{border:"2px solid black",marginLeft: "0px",
                            margin: "10px",borderRadius: "5px",
                            background: "Red", color: "white"
                        }}>
                            <li> <strong>Name:</strong> {institute.name}</li>
                            <li><strong>Age: </strong>{institute.age}</li>
                            <li><strong> Degree: </strong>{institute.degree}</li>
                            
                        </ul>
                    ))
                }
    </div>
  )
}
