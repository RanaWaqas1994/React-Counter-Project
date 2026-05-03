import React, { Suspense } from 'react'
import UseApiForUser from './UseApiForUser';
const fetchData = ()=> fetch("https://dummyjson.com/users").then((Response)=>Response.json());
// console.log(fetchData());
const userResource = fetchData();

// agr yeah upar wale Const fetchData and userResource hum andr Export Default function me likhte tw 
// bar bar hamara API rerender hoga jo sahi ni ha 
// useEffect ke sath bhi bar bar rerender hota tha


export default function RestAPIs() {
  return (
    <div>
        <h1>Rest API in React Js</h1>
        <Suspense fallback={<h2>...Loading</h2>}>
            <UseApiForUser userResource = {userResource} />
        </Suspense>

        {/* Agr ap Suspense use ni karte or 
        Const fetchData and userResource export default me use karte ho 
        phr kya hoga apki API Calls infinite loop me chali jaye ge
        */}
      
    </div>
  )
}
