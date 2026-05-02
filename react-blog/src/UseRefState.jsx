import React from 'react'
import { useRef } from 'react'

export default function UseRefState() {
    const useRefInput = useRef(null)
    const useTernaryRefInput = useRef(null)
    const UseRefHandler = ()=> {
        console.log("Input the Feild", useRefInput)
        useRefInput.current.focus()
        useRefInput.current.style.color="red"
        useRefInput.current.placeholder ="Enter Password"
        useRefInput.current.value = "This is new Value"
        // useRefInput.current.type = "password"
    }
    const ToggleHandler = ()=>{
        if ( useRefInput.current.style.display!="none") {
             useRefInput.current.style.display="none"
        } else
        useRefInput.current.style.display="inline"
    }


    const TernaryOperatorToggle = () => {
        const el = useTernaryRefInput.current;
        //yeah bhi le sakte han
//   useTernaryRefInput.current.style.display = useTernaryRefInput.current.style.display !== "none" ? "none"
  el.style.display = el.style.display !== "none" ? "none"
      : "flex";
        el.style.color = el.style.color !== "red" ? "red"
      : "green";
};
  return (
    <div>
        <h1>UseRef Hook</h1>
        {/* Binding the useRef with input Feild */}
        
        <input onClick={UseRefHandler} value="Submit" type='submit' />
        <input ref={useRefInput} type="text" placeholder='Enter Your Name' />
        <button onClick={ToggleHandler}>Toggle Handler</button>
         <br />
        <h1 ref={useTernaryRefInput} >This is Ternary Operator</h1>
    <button onClick={TernaryOperatorToggle}>Ternary Toggle Handler</button>

        
      
    </div>
  )
}
