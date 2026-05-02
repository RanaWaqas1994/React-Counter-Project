import React, { useState } from 'react'

export default function InlineStyle() {


    const [styled,setStyled] = useState({
    boxShadow: "0px 0px 12px #c3c3c3",
    width: "250px",
    padding: "10px",
    margin: "10px auto",
    textAlign: "center",
    }
)
//Senior developers aur React docs recommend karte hain yeah wala
// const updateTheme = (setBG,setColor)=> {
//   setStyled(prev => ({
//     ...prev,
//     backgroundColor:setBG,
//     color:setColor
//   }))

// }

const updateTheme = (setBG,setColor)=> {

    //console.log(setBG,setColor);
    // setStyled({...prev,backgroundColor:setBG,color:setColor})
    setStyled(prev =>({
        ...prev,
        backgroundColor:setBG,
        color:setColor
    }))
    
}
const [display,setDisplay] = useState(true)
const [grid,setGrid] = useState(true)
  return (
    <div>
        <h1>Inline Style Lecture 32</h1>
        <h1>Dynamic and Conditional Inline Style Lecture 33</h1>

        <button onClick={()=>updateTheme("Red","yellow")}>Red Theme</button>
        <button onClick={()=>updateTheme("transparent","white")}>Default Theme</button>
        <button onClick={()=>setDisplay(!display)}> Toggle Hide and Show</button>
        <button onClick={()=>setGrid(!grid)}> Toggle Grid</button>
        {/* condition false ha tw disply block 1st button pe or Display: none ho jaye or agr
        condtion true ha tw display flex or dosre button pe Show ho jaye ga display block*/}
        <div  style={{display: display ? (grid ? "flex" : "block") : "none", flexWrap: "wrap"}}>

            <div style={styled}>
                <img src="/Image.jpg" alt="" style={{width: "150px"}}/>
                <h2>Waqas Asim</h2>
                <h4>Software Developer</h4>
            </div>

            <div style={styled}>
                <img src="/Image.jpg" alt="" style={{width: "150px"}}/>
                <h2>Waqas Asim</h2>
                <h4>Software Developer</h4>
            </div>
             
            <div style={styled}>
                <img src="/Image.jpg" alt="" style={{width: "150px"}}/>
                <h2>Waqas Asim</h2>
                <h4>Software Developer</h4>
            </div>   
             
            <div style={styled}>
                <img src="/Image.jpg" alt="" style={{width: "150px"}}/>
                <h2>Waqas Asim</h2>
                <h4>Software Developer</h4>
            </div>   
             
            <div style={styled}>
                <img src="/Image.jpg" alt="" style={{width: "150px"}}/>
                <h2>Waqas Asim</h2>
                <h4>Software Developer</h4>
            </div>   
             
            <div style={styled}>
                <img src="/Image.jpg" alt="" style={{width: "150px"}}/>
                <h2>Waqas Asim</h2>
                <h4>Software Developer</h4>
            </div>   
             
            <div style={styled}>
                <img src="/Image.jpg" alt="" style={{width: "150px"}}/>
                <h2>Waqas Asim</h2>
                <h4>Software Developer</h4>
            </div>   
             
            <div style={styled}>
                <img src="/Image.jpg" alt="" style={{width: "150px"}}/>
                <h2>Waqas Asim</h2>
                <h4>Software Developer</h4>
            </div>   
             
            <div style={styled}>
                <img src="/Image.jpg" alt="" style={{width: "150px"}}/>
                <h2>Waqas Asim</h2>
                <h4>Software Developer</h4>
            </div>             
        </div>
      
    </div>
  )
}
