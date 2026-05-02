import React, { useTransition } from 'react'

export default function UseTransitionHook() {
    //This is UseState Method

    // const[transition,setTransion]= useState(false)

    // const handleTransition =async()=>{
    //     setTransion(true);
    //     await new Promise(res=>setTimeout(res,3000))
    //     setTransion(false);
    // }

    // End

    //Now Using useTransition Hook
    const[transition,startTransition]=useTransition();
    
    const handleTransition=()=>{

        startTransition(async()=>{
         await new Promise(res=>setTimeout(res,5000))
        })
       
    }

  return (
    <div>
      <h2>useTransition Hook in React JS</h2>
      {transition ? <img style={{width:"100px",display:"flex"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"/>
      :null}
      <button disabled={transition} onClick={handleTransition}>Click to Show Transition</button>
    </div>
  )
}
