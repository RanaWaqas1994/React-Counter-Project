import React from 'react'

export default function DefaultPropsWrapper({children,color="red"}) {
  return (
    <div style={{color:color, background: "White",
     padding:"10px",border:"10px solid green", margin:"10px 0px", width:"1000px"}}>
      {children}
    </div>
  )
}
