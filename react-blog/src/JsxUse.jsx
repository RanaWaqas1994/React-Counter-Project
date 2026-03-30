// import React, { createElement } from 'react'
export default function JsxUse() {
    const UserName = "Waqas Asim";
   let x = 10; let y = 20;


  return (
    <div>
      <h1>
        {UserName}
      </h1>
      <h1>{10 + 40}</h1>
      <h1> {x * y} </h1>
      <button onClick={()=>alert("Clicked")} >Click Me</button>
    </div>
  ) 
}
 
// export function WithoutJsx () {
//     return createElement("div",{id:"rootdiv"},"Hello Div") //kafi Complex ha without JSX.

// }