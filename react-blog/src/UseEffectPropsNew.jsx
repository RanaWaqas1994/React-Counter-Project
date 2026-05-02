import React, { useEffect } from 'react'

export default function UseEffectPropsNew({Effect,Actual}) {
    // const handleCounter=()=>{
    //     console.log("Handle Counter Called")
    // }
    // const handleEffect=()=>{
    //     console.log("Handle Effect Called")
    // }

    useEffect(()=> {
      console.log("Mount Phase Only")
    },[])


    useEffect(()=>{
    // handleCounter();
 console.log("Update Phase Only")
    },[Effect])

useEffect(()=>{
  return ()=> {
    console.log("Unmount Phase Only")
  }
},[])
    // useEffect(()=> {
    //         handleEffect();
    // },[])
  return (
    <div>
      <h2>This is New Props Use Effect {Effect} </h2>
      <h2>This is Actual Effect for Props {Actual} asd</h2>
    </div>
  )
}
