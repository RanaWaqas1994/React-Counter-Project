import React, { useEffect, useState } from 'react'

export default function IntegrateJsonServerApiLoader() {
// Loading ke liye hum state lain ge
    const[loading,setLoading] = useState(false)

    const [userJsonData,setUserJsonData]= useState([])
    useEffect(()=>{
        //Jese hi API call hona start ho tbh hum loading True kar dain ge
        setLoading(true);
        getJsonUserData();
        
    },[])
    
    const getJsonUserData = async()=>{
        let newUrl= "http://localhost:3000/users";
        let NewResponse = await fetch(newUrl)
        NewResponse = await NewResponse.json();
        console.log(NewResponse);
        //yeah 2
        setUserJsonData(NewResponse);
        setLoading(false);

        // Agr khudse delay dalna ha tabh warna upar jo 2 comment kiye han usko khol ke sath me 
        //network pr "no Trotting" ko "3g karke" check karo

//   setTimeout(() => {
//     setUserJsonData(NewResponse);
//     setLoading(false);
//   }, 5000);
    }
  return (
    <div className='test'>

        <h1> Integrate JSON Server API and Loader</h1>
                <ul className='user-list head'>
                    <li>First Name</li>
                    <li>Age</li>
                    <li>Email</li>
                </ul>
        {  
            !loading?
            userJsonData.map((user,index)=>(
                
                <ul key={index} className='user-list'>
                    <li>{user.name}</li>
                    <li>{user.age}</li>
                    <li>{user.email}</li>
                </ul>
               
            )):<h1>Data is Loading</h1>
        }
      
    </div>
  )
}
