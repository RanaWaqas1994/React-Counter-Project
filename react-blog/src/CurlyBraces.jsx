import React from 'react'

export default function CurlyBraces() {
    const name ="Waqas"
    let a = 10;
    let b = 20;
    let c = 20
function fruit (){
    return "Apple";

}
//Function having Parameters
function Math(a,b){
   return a + b;
}

function Operations (a,b,op){

    if(op== "+") {
        return a + b;
    }
    else if(op == "-"){
        return a-b;
    }
    else
        return a * b;

}

const userObj ={
     name: "Waqas",
     room: "IT",
     Lab: "9 - 10"

}

const path = "/Bloging.jpg"

const userArray = ["sam","Waqas","Peter"]
  return (
    <div>
        <h1>JSX with Curley Braces</h1>
        {/* <h1> My Name is {name} </h1> */}
        {/* {Ternary Operator} */}
        <h1> {name?name: "User not found"}  </h1> 
        <h1>{a + b - c}</h1>
        <h1> {fruit()} </h1>
        <h1> {Math(20,130)} </h1>
        <h1> {Operations(20,10, "")} </h1>
        <h1> {userObj.room} </h1>
        <h1> {userArray[0,1]} </h1>
        <img src={path} alt="" /> <br />
        <input type="text" value={name} id={name} />
      
    </div>
  )
}
