import React, { useState } from 'react'

export default function UpdatingObjState() {
    const[user,setUser] = useState("____")
    const [data,setData] = useState({
        name: "_________",
        address: {
            city: "Lahore",
            country: "Pakistan"
        }
    })
    const HandleUser = ()=> {
                setUser("Rana Waqas Asim Rasheed")
    }
    // const HandleDataUser = (val)=> {
    //     data.name=val
    //     setData({...data})
    //     console.log(data)
    // }
    const HandleDataUser = (val) => {
  setData((prev) => ({
    ...prev,
    name: val
  }));
};

//Kabhi bhi direct change na karo hamesha Previous + Spread ko use karke change karo
//Nested state update = kabhi bhi direct change nahi, hamesha prev + spread use karo

// const HandleDataUserCity = (city)=>{
//     data.address.city = city;
//     console.log(data);
//     setData({...data,address:{...data.address,city}})
// }
// const HandleDataUserCountry = (country)=>{
//     data.address.country = country;
//     console.log(data);
//     setData({...data,address:{...data.address,country}})
    
// }
const HandleDataUserCity = (city) => {
  setData(prev => ({
    ...prev,
    address: {
        ...prev.address,city
    }
  }));
};

const HandleDataUserCountry = (country) => {
  setData(prev => ({
    ...prev,
    address: {
      ...prev.address, country
    }
  }));
};

const HandleName = (name)=> {
    data[data.length-1]= name;
    setData(...data)
}
  return (
    <div>
        <h1> Updating Objects in State</h1>
        <h2>Name: {user} </h2>

        <button onClick={HandleUser}>Change Name</button>
        <hr />
        <input type="text" placeholder='Update Name'
         onChange={(event)=>HandleDataUser(event.target.value)} /> <br />    
        <input type="text" placeholder='Update City'
         onChange={(event)=>HandleDataUserCity(event.target.value)} /> <br /> 
        <input type="text" placeholder='Update Country'
         onChange={(event)=>HandleDataUserCountry(event.target.value)} /> <br />        
        <h2>Name: {data.name}</h2>
        <h2>City: {data.address.city}</h2>
        <h2>Adress: {data.address.country}</h2>
      
    </div>
  ) 
}
