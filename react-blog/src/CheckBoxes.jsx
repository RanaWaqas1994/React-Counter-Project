import React, { useState } from 'react'

export default function CheckBoxes() {
    const [checkBox,SetcheckBox]= useState([])
    const handleSkills = (event)=> {
        console.log(event.target.value, event.target.checked)
        if (event.target.checked) {
          //  SetcheckBox(event.target.value) 
          //Abhi yaha Single Value Show ho rahi ha
          SetcheckBox([...checkBox,event.target.value]) 
          //Yeah Checked Ke liye ha 
          //Array [...skill] Spread Operator 
          // sari values checkBox ki pehle
          //bad me jo value checked hoi yani (event.target.value)
          //  han wo  asye [...checkBox,event.target.value]
        }
        else {
                SetcheckBox([...checkBox.filter(
                    (item)=>item!= event.target.value)]) 
                //Unchecked karne ke liye Filter function lagana ha
                //yeah apne ap me 1 function rakhta ha
                //agr ap ...checkbox ni lagtye tw array 
                // ke andar array chall jaye ga
            
        }
    }
  return (
    <div>
        <h3>Select Your Skills By Using Below CheckBoxes</h3>
      <input onChange={handleSkills} type="checkbox" value="PHP" id="php" />
      <label htmlFor="php">PHP</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" value="Laravel" id="Laravel" />
      <label htmlFor="Laravel">Laravel</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" value="DotNet" id="DotNet" />
      <label htmlFor="DotNet">DotNet</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" value="Codignator" id="Codignator" />
      <label htmlFor="Codignator">Codignator</label>
      <br />
      <br />
      <h2>{checkBox}</h2>
    </div>
  )
}
