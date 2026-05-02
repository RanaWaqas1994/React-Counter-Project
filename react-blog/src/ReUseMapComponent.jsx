import React from 'react'

export default function ReUseMapComponent({mapping}) {
  return (
    <div style={{border:'2px solid green',padding: '20px',
     margin: '10px', width: '500px', borderRadius:'5px'}}>
    <h3>IDs:   <span style={{color:'red'}}>{mapping.id}</span>
    </h3>
    <h3>Name:  <span style={{color:'red'}}>{mapping.name}</span>
    </h3>
    <h3>Class: <span style={{color:'red'}}>{mapping.class}</span>
    </h3>
    <h3>Age:   <span style={{color:'red'}}>{mapping.age}</span>
    </h3>
    </div>
  )
}
