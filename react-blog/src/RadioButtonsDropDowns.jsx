import React, { useState } from 'react'

export default function RadioButtonsDropDowns() {
    const[gender,setGender]= useState("Male")
    const[city,setCity]= useState("")
  return (
    <div>
        <h3>Handle Radio DropDown</h3>
        <input type="radio" onChange={(event)=> setGender(event.target.value)}
        name="gender" id="Male" value={"Male"} checked={gender == "Male"} />
        <label htmlFor="Male">Male</label>
        <input type="radio" onChange={(event)=> setGender(event.target.value)}
        name="gender" id="Female" value={"Female"} checked={gender == "Female"} />
        <label htmlFor="Female">Female</label>
        <h3>Selected Gender: {gender}</h3>   
        <br />  <br /> <br />

        <select onChange={(event)=>setCity(event.target.value)} defaultValue={"Islamabad"} >
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
            <option value="Islamabad">Islamabad</option>
        </select>
        <h3>Selected City is: {city || "Islamabad"}</h3>
        <br /><br /><br />
    </div>
  )
}
