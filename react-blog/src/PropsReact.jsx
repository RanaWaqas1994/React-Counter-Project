import React from 'react'

// export default function PropsReact({name,age,email}) {
//     console.log(name,age,email)

export default function PropsReact({user}) {
    
  return (
    <div>
        <hr />
        <h1>This is about Props</h1>
        <h1>Name: {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <h1>Email: {user.email}</h1>


      
    </div>
  )
}
