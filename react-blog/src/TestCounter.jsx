import {useState} from "react"

export default function TestCounter() {
    
    const[mainnumber,setMainnumber] = useState("_______")

    const ChangeNumber = useState("03161406648")

    const ChangeNumber1 = ("0987654321")

    const [plusNumber,setPlusNumber] = useState(10)

    const [minusNumber,setMinusNumber] = useState(11)

    const [multipyNumber,setMultiplyNumber] = useState(2)

    const [divideNumber,setDivideNumber] = useState(100)


    


  return (
    <div>
        <h1>The New number is:  {mainnumber} </h1>
        <h1>{mainnumber} </h1>
        <h1>This is the increment operator {plusNumber} </h1>
        <h1>This is the Decrement operator {minusNumber} </h1>
        <h1>This is the Multipy operator {multipyNumber} </h1>
        <h1>This is the Divide operator {divideNumber} </h1>
        <button onClick={()=> setMainnumber(ChangeNumber)}>New Number</button> <br />
        <button onClick={()=> setMainnumber(ChangeNumber1)}>New Number 1</button> <br />
        <button onClick={()=> setPlusNumber(plusNumber + 1)} >Plus Number</button> <br />
        <button onClick={()=> setMinusNumber(minusNumber - 1)} >Minus Number</button> <br />
        <button onClick={()=> setMultiplyNumber(multipyNumber * 2)} >Multiply Number</button>
        <button onClick={()=> setDivideNumber(divideNumber/ 2)} > Divide Number</button>
        

      
    </div>
  )
}
