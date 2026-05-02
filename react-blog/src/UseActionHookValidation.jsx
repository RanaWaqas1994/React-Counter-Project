import React, { useActionState } from 'react'

export default function UseActionHookValidation() {
    const HandleLogin = (prevData,formData)=>{
        // console.log("Called")
        let name = formData.get("name")
        let password = formData.get("password")
        let regex = /^[A-Z0-9]+$/i;


        // console.log(name,password);
        if(!name || name.length>5){
            return {error: "Name cannot be empty and add only 5 char", name,password}

        } else if (!regex.test(password)){
            return {error: "Add only number and Charachter" , name,password}
        } else {
            return {message: "Login" , name,password}
        }
        
    

    }
    const [data,action] = useActionState(HandleLogin)
        console.log(data)
  return (
    <div>
        <h1>Validation with useActionState</h1>
        {
            data?.message && <span style={{color:'green'}}>{data?.message}</span>
        }
        {
            data?.error && <span style={{color:'red'}}>{data?.error}</span>
        }
        <form action={action}>
        <input defaultValue={data?.name} type="text" name='name' placeholder='Enter Name' />

        <br /><br />
        <input defaultValue={data?.password}  type="text" name='password' placeholder='Enter Password' />

        <br /><br />
        <input  type="Submit"  />
</form>
    </div>
  )
}
