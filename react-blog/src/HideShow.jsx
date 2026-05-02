import { useState } from "react"
import EventsNew from "./EventsNew"

export default function HideShow() {

    const [display,setDisplay]= useState(false)
    const [displays,setDisplays]= useState(false)
  return (
    <div>
        <h1>Toggle in React JS</h1>
        <button onClick={()=>setDisplay(!display)}>Toggle</button>

        {display ? <h1>Waqas Asim</h1>: null}
        
        <button onClick={()=>setDisplays(!displays)}>Toggle</button>

        {displays ? <h1><EventsNew/> </h1>: null}
      
    </div>
  )
}
