import {useFormStatus} from 'react-dom'

export default function UseFormStatusHook() {
    const UseFormStatus=async ()=>{
        await new Promise(res=>setTimeout(res,3000));
        console.log("Submit")
    }
    function UserFunction() {
    const {pending} =useFormStatus();
    console.log(pending)
    return(
        <div>
            <h1>Use Form Status Hook in React Js</h1>
        <input type="text" placeholder='Your Name'/><br /><br />
        <input type="text" placeholder='Your Name'/><br /> <br />
        <button disabled= {pending}>{pending? "Submitting...": "Submit"}</button>
        </div>
    )
    }

  return (

    <div>
      <form action={UseFormStatus}>
        <UserFunction/>
      </form>
    </div>
  )
}
