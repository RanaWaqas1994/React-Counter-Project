import React, { useEffect, useState } from 'react'

export default function Clocks({maincolor}) {
    const[time,setTime] = useState(0)


    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])
  return (
    <div>
        <h3>Digital Clock in React Js</h3>

        <h2 style={
            {color:maincolor,backgroundColor: "transparent",
             width: "150px",padding: '10px',borderRadius:'5px',
             textAlign: 'center',border: '5px solid',
            borderColor: maincolor}}>
            {time}
        </h2>

      
    </div>
  )
}
