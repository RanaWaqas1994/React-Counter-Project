import React, { useEffect, useState } from 'react'

export default function UseEffectSate() {
    // function CallOnce(){
    //     console.log("Call Once");
    // }
   
    const[Effect,setEffect] = useState(0)
    const[Actions,setActions] = useState(0)    
    
    // useEffect(()=>{
    // CallOnce();
    // },[])
    //Use effect se jo bar bar function call ho raha tha wo ni hoga
    //Bas 1 dafa chale ga

        function UseEffectCounter(){
        console.log("UseEffectCounter Called", Effect);
         console.log("UseActionsCounter Called", Actions);
    }

    useEffect(()=>{
        UseEffectCounter();
    },[Effect,Actions])

    //Yeah uppar wala abh sirf Effect wali
    //state ko chalaye ga dosri ko ni
        

  return (
    <div>
        <h1>UseEffect Hooks</h1>
        <h2>UseEffect Hooks Counter: {Effect} </h2>
        <h2>UseActions Hooks Counter: {Actions} </h2>

        <button onClick={()=> setEffect(Effect + 1)}>Use Effect Counter {Effect} </button>
        <button onClick={()=> setActions(Actions + 1)}>Use Effect Counter</button>
      
    </div>
  )
}
