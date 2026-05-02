import React, { useActionState } from 'react'

export default function UseActionState() {
    const HandleSubmitForm =async (previousData,formData)=> {
        // console.log("Form Submit");
        let name = formData.get("name");
        let password = formData.get('password')

        await new Promise(res=>setTimeout(res,3000))

                // console.log("Form Submit",name,password);
        if(name && password){
            return {message: "Submited",name,password}
        } else{
            return {error:"Please enter Feilds to Submit Data",name,password}
        }

        
    }
    const [data,action,pending]= useActionState(HandleSubmitForm,undefined)

    console.log(data)
  return (
    <div>
        <h1>UseActionState Hook in React</h1>
        <form action={action}>
            <input type="text" defaultValue={data?.name} placeholder='Enter Name' name='name' />
            <br /> <br />
            <input type="password" defaultValue={data?.password} placeholder='Enter Password' name='password' />
            <br /> <br />
            <button disabled={pending}>Submit Data</button>
        </form>
      {
        data?.error && <span style={{color:"red"}}>{data?.error}</span>
      }
      {
        data?.message && <span style={{color:"green"}}>{data?.message}</span>
      }

      <h3> Name: {data?.name} </h3>
      <h3> Password: {data?.password} </h3>
    </div>
  )
}
