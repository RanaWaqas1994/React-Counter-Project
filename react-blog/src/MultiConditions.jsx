import { useState } from "react"

export default function MultiConditions() {
    const[multiCount,setmultiCount]= useState(0)
    
  return (
    <div>
        <h1>{multiCount} </h1>
        <button onClick={()=> setmultiCount(multiCount + 1)}>Counter</button>
        {
            multiCount == 1 ? <h1>Condition 1</h1>:
            multiCount == 2 ? <h1>Condition 2</h1>:
            multiCount == 3 ? <h1>Condition 3</h1>:
            multiCount == 4 ? <h1>Condition 4</h1>:
            multiCount == 5 ? <h1>Condition 5</h1>:
            <h1>Other Conditions</h1>
        
        }
      
    </div>
  )
}
