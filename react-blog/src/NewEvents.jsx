import React from 'react'

//Function ko agar yaha bhi rakh do tabh bhi cahle ga or neche bhi rakh do phr bhi
// agr dono jagah ho phr bhi chale ga
    // const TotalFruits =(name)=> {
    //     alert(name)
    // }
export default function NewEvents() {
    function ClickMe(){
        alert("Click Me")
    }

    //Arrow Functions =()=>
    const NewFruit =()=> {
        alert("Apple")
    }

    const TotalFruits =(name)=> {
        alert(name)
    }

  return (
    <div>
        <button onClick={ClickMe} >Simple function Click Me to show New Event</button>
        <button onClick={NewFruit} >Fruit With Arrow Function</button>
        <h1>Need to call function within the arrow function </h1>
        <button onClick={()=> TotalFruits("Apple are 10")} > Total Apple within the arrow function </button>
        <button onClick={()=> TotalFruits("Bananas are 20adasd")} > Total Bananas within the arrow function </button>
        <hr />
        <h1>Click below button to show the Fruit</h1>

    </div>
  )
}
