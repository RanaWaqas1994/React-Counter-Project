import React from 'react' 

function UserComponent() {
  return (
    <div>
      <h1>Importing and Exporting User Component</h1>
    </div>
  )
}

export default UserComponent;
 
export function AdminPanel(){
    return (
    <div>
        <h1>Admin Panel</h1>
    </div>
    )
}

export function AdminLogin(){
      return (
    <div>
        <h1>Admin Login</h1>
    </div>
      )
}
//declare any constant

export const AdminNo = "&^^%^$%^$^%$@@"
