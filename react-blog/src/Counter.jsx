import React, { useState } from 'react'


export default function Counter() {

    const[count,setCount]= useState(0);
    const[counts,setCounts]= useState(0);
    const[Rcounts,setRCounts]= useState(10);
    //Asye bhi call kar sakte han counter or direct bhi in button
    const AddCounter =()=>{
        setCount(count + 1)
    }
    
  return (
    <div>
        <h1>Seprate Counter Function Addition: {count} </h1>
        <button onClick={AddCounter}>Add Count</button>
        <h1>State in Button Counter Addition: {counts} </h1>
        <button onClick={()=> setCounts(counts + 1)} >In Button Count</button>
        <h1>State in Button Counter Decrement: {Rcounts} </h1>
        <button onClick={()=> setRCounts(Rcounts + 1)} >In Button Increment</button>
        <button onClick={()=> setRCounts(Rcounts - 1)} >In Button Decrement</button>

        
      
    </div>
  )
}
