import React, { useState } from 'react'
import Counter from './Counter'


export default function NewHooks() {
    const [fruits,setFruits] = useState("This is the Apple")

    const changeMainFruit = "This is Banana"


    // const changeFruit=()=> {
    //     setFruits("This is the Banana")
    // }

    // const changeMainFruit=()=> {
    //     setFruits("This is the  Actual Banana")
    // }    
    
  return (
    <div>
        <h1>State and Hooks in React</h1>
        <h1>{fruits} </h1>
        {/* <button onClick={changeFruit} >Change the Fruit Name</button> */}
        <button onClick={()=>setFruits(changeMainFruit)} >Change the Main Fruits</button>
        <hr />
        <Counter/>
      
    </div>
  )
}
