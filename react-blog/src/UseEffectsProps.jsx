import React, { useState } from 'react'
import UseEffectPropsNew from './UseEffectPropsNew'

export default function UseEffectsProps() {
    const[PropsEffect,setPropsEffect]= useState(0)
    const[PropsActualEffect,setPropsActualEffect]= useState(0)
    const[DisplayEffect,setDisplayEffect]= useState(true)
  return (
    <div>
        <h1>Handle Props Side Effect with useEffect</h1>

        {/* <h3>UseEffect Props Counter: {PropsEffect} </h3> */}

        {DisplayEffect ? <UseEffectPropsNew Effect = {PropsEffect} Actual = {PropsActualEffect} />:null}

        <button onClick={()=>setPropsEffect(PropsEffect + 1)} >UseEffect Props {PropsEffect}</button>
        <button onClick={()=>setPropsActualEffect(PropsActualEffect + 1)} >PropsActualEffect Button {PropsActualEffect}</button>
        <button onClick={()=>setDisplayEffect(!DisplayEffect)} >DisplayEffect Toggle</button>
    </div>
  )
}
