import Header from "./assets/Header"
import UserComponent,{AdminPanel,AdminLogin, AdminNo} from "./UserComponent";
import JsxUse from "./JsxUse";
import ToDo from "./ToDo";
import CurlyBraces from "./CurlyBraces";
import NewEvents from "./NewEvents";
import NewHooks from "./NewHooks";
import TestCounter from "./TestCounter";
import HideShow from "./HideShow";
import MultiConditions from "./MultiConditions";
import PropsReact from "./PropsReact";
import PropsReactCollege from "./PropsReactCollege";
import PropsReactStudents from "./PropsReactStudents";
import { useState } from "react";
import DefaultProps from "./DefaultProps";
import DefaultPropsWrapper from "./DefaultPropsWrapper";
import InputFeildValChange from "./InputFeildValChange";
import ControlledComponent from "./ControlledComponent";
import CheckBoxes from "./CheckBoxes";
import RadioButtonsDropDowns from "./RadioButtonsDropDowns";
import MappingFunction from "./MappingFunction";
import ReUseComponent from "./ReUseComponent";
import UseEffectSate from "./UseEffectSate";
import UseEffectsProps from "./UseEffectsProps";
import Clocks from "./Clocks";
import NestedLoop from "./NestedLoop";
import InlineStyle from "./InlineStyle";
import ModuleCssComponent from "./ModuleCssComponent";
import StyledComponent from "./StyledComponent";
import BootstrapReact from "./BootstrapReact";
import UseRefState from "./UseRefState";
import UncontrolledComponentRef from "./UncontrolledComponentRef";
import PassFunctionComponentProps from "./PassFunctionComponentProps";
import UseFormStatusHook from "./UseFormStatusHook";
import UseTransitionHook from "./UseTransitionHook";
import DerivedState from "./DerivedState";
import LiftingUpState from "./LiftingUpState";
import LiftingUpStateUser from "./LiftingUpStateUser";
import UpdatingObjState from "./UpdatingObjState";
import UseActionState from "./UseActionState";
import UseIDHook from "./UseIDHook";
import ContextApiCollege from "./ContextApiCollege";
import { SubjectContext } from "./ContextAPI";
import useCustomHook from "./useCustomhook";
import useToggle from "./useToggle";
import GetDataAPI from "./GetDataAPI";
import IntegrateJsonServerApiLoader from "./IntegrateJsonServerApiLoader";
import UserList from "./UserList";
import { Routes , Route, NavLink, Link} from "react-router";
import AddUserApi from "./AddUserApi";

function App (){
    // alert(increment());
        // let userName ="Waqas Asim"
    let Newage = "31 Years"
    let NewEmail ="waqas@gmail.com"
    // Always use inside the body function not in the return
  const [students,setStudents]= useState ("")
  const[color,setColor] = useState("")

  const PassFunction = (name)=> {
    alert(name)
  }
 const NewUserAge = (age)=>{
  alert(age)
 }
//Lecture 45 
//👉 State ko child component se utha ke parent component me rakhna
//taake multiple components usko share kar saken.
  const[liftingUser,SetLiftingUser]= useState('_____')

  // Lecture 52 ContextAPI
  const [subject,setSubject]= useState("")
  const[pending,setPending] = useState(false)
  const ContextApiClearBtn = async()=> {
    setPending(true)
  await new Promise(ref=>setTimeout(ref,3000))
  setSubject("");
  setPending(false);
  }

  // Lecture 53: Use Custom Hooks
  const { count, increments } = useCustomHook()

  const[isOn,toggle] =useToggle();


  return (
    
    <>
 
    <Header/>
    <h1>Hello React Component {increment()} </h1>
    ==============================================================================================
    <Car/>
    ==============================================================================================
    
    <Colors/>
    ==============================================================================================

    <hr />
    <UserComponent/>
    ==============================================================================================
    <AdminLogin/>
    ==============================================================================================
    <AdminPanel/>
    ==============================================================================================
    <h1>   {AdminNo} </h1>
    <hr />
    <JsxUse/>
    ==============================================================================================
    <ToDo/>
    ==============================================================================================
    <CurlyBraces/>
    {/* <WithoutJsx/> */}
        <hr />
    <NewEvents/>
<hr />
  ==============================================================================================
<NewHooks/>
==============================================================================================
<TestCounter/>
==============================================================================================
==============================================================================================
<HideShow/>
==================================================
==================================================
<MultiConditions/>
==================================================
==================================================



{/* <PropsReact name = "Waqas" age={32} email = "waqasasim19001@gmail.com"/> */}
==================================================
<h1>Call the Values by variable below:</h1>
==================================================
{/* <PropsReact name = {userName} age={Newage} email = {NewEmail}/> */}
<PropsReact user={userObj} />
<PropsReact user={userObj1} />
<PropsReact user={userObj2} />
<hr />
<PropsReactCollege names={collegeNames[0]}/>
<PropsReactCollege names={collegeNames[1]}/>
<PropsReactCollege names={collegeNames[2]}/>
<hr />
{/* Using State for Onclick to show Props */}
{students && <PropsReactStudents name={students}/>}
<button onClick={()=>setStudents("Rana Waqas Asim")}>Click to show new Student</button>
<br />
====================================================================================================
====================================================================================================
<DefaultProps name="Vicky"/>
<DefaultProps/>

====================================================================================================
<DefaultPropsWrapper color="Purple">
    <h1>This is Inner Component Elements</h1>
</DefaultPropsWrapper>

<DefaultPropsWrapper color="orange">
    <h1>This is Inner Component Elements</h1>
    <h1 style={{color:"green"}}>This is Sub Component</h1>
</DefaultPropsWrapper>

====================================================================================================
{/* Lecture 20 */}
<InputFeildValChange/>
====================================================================================================
{/* Lecture 21 */}
<ControlledComponent/>
====================================================================================================
{/* Lecture 22 */}
<CheckBoxes/>
====================================================================================================
{/* Lecture 23 */}
<RadioButtonsDropDowns/>
====================================================================================================
{/* Lecture 24 */}
<MappingFunction/>
====================================================================================================
{/* Lecture 25 */}
<ReUseComponent/>

{/* Lecture 27 */}
{/* Intro of Hooks */}
{/* Lecture 28  UseEffects*/}
<UseEffectSate/>
{/* Lecture 29  Handle Props Side Effect with useEffect*/}
{/* Lecture 30  Use Effect Hook for Life Cycle Methods in React*/}
<UseEffectsProps/>
{/* Lecture 30 A: Props Task for You to Make Clock by Using useEffect */}
<Clocks maincolor={color}/>

        <select onChange={(event)=>setColor(event.target.value)}>
          <option value={"white"}>Default Color</option>
            <option value={"Green"}>Color Green</option>
            <option value={"Yellow"}>Color Yellow</option>
            <option value={"Pink"}>Color Pink</option>
        </select>
{/* Lecture 26 : Array Nested Looping with component */}
    <NestedLoop/>
{/* Lecture 31 :  Styling in React JS 
Introduction of Styling
*/}
{/* Lecture 32 :  Inline Style in React / Lecture: 33 Dynamic and Conditional Inline Style*/}
<InlineStyle/>

{/* Lecture: 34 External Style | CSS  
Just Create new file for CSS, import the file,
 then add className to all TAGs and then add css to the className.
*/}
 {/* Lecture 35 : Style with CSS Modules*/}

 <ModuleCssComponent/>
 {/* Lecture 36 : Styled Component*/}
 <StyledComponent/>
  {/* Lecture 37 :  Add Bootstrap with React js*/}
  <BootstrapReact/>
  {/* Lecture 38 :  useRef Hook*/}
  <UseRefState/>
    {/* Lecture 39 :   uncontrolled component*/}
    <UncontrolledComponentRef/>
    {/* Code on the Top as creating function in main file not inner file to save Extra Code */}
   {/* Lecture 40 :   Pass Function in Component as Props*/}
   <PassFunctionComponentProps PassFunction={PassFunction} name="Waqas" NewUserAge ={NewUserAge} age ="32"/>
   <PassFunctionComponentProps PassFunction={PassFunction} name="Asim" NewUserAge ={NewUserAge} age ="58"/>
   <PassFunctionComponentProps PassFunction={PassFunction} name="Sam"  NewUserAge ={NewUserAge} age ="30"/>
  <hr />
  {/* Lecture 41: useFormStatus Hook in React js*/}
  <UseFormStatusHook/>
    {/* Lecture 42: useTransition Hook in React js*/}
    <hr />
  <UseTransitionHook/>
      {/* Lecture 43: Pure Component in React js*/}
    <hr />
      {/* Lecture 44: Derived State in React.js*/}
      <DerivedState/>
    <hr />
      {/* Lecture 45: Lifting State Up in React js*/}
      <LiftingUpState SetLiftingUser={SetLiftingUser}/>
      <LiftingUpStateUser liftingUser={liftingUser}/>
    <hr />
      {/* Lecture 46:  Updating Objects in State */}
      <UpdatingObjState/>
      {/* 3️⃣ (prev) => { ... }

👉 Ye function hai jo React khud call karta hai
👉 prev = previous (purani) state

4️⃣ { ...prev, name: val }

👉 Naya object bana rahe ho:

...prev → purani sari values copy
name: val → sirf name change */}

      {/* Lecture 47:  Updating Array in State */}
        <hr />
        {/* Lecture 48:  useActionState Hook */}    
        <UseActionState/>
        <hr />
        {/* Lecture 49:  useId Hook in Reactjs */}
        <UseIDHook/>
        {/* Lecture 50:  Fragments in Reactjs */}
          {/* Lecture 51:  Rules for Reactjs Hooks */}   

          {/* Lecture 52 Context API Reactjs  */}
          <div style={{background:"Red",padding:20, color:"white"}}>
            <SubjectContext.Provider value={subject}>
              <select className="p-2 bg-dark text-white" value={subject} onChange={(e)=>setSubject(e.target.value)}>
                <option value="">Select Subject</option>
                <option value="Math">Math</option>
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
              </select>
              <button className="btn btn-success m-1" disabled={pending}
              onClick={ContextApiClearBtn}>Clear Subject</button>
                <h1>Context API in React Js</h1>
                <ContextApiCollege/>
            </SubjectContext.Provider>


          </div>
          <hr/>
          <div>
   {/* Lecture: 53 Custom Hooks in Reactjs  */}

      <h2>Use Custom Hook Counter: {count}</h2>
      <button onClick={increments}>+ Use CustomHook</button>
<hr />
<h2>Use Custom Hook for Toggle</h2>
      <h1>{isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Toggle</button>

<hr />
<hr />
<hr />
   {/* Lecture: 56 Fetch and Display Data from API with Get Method  */}
        {/* <GetDataAPI/> */}
        <h1>Get Data from API</h1>
{/* Lecture: 57 JSON-server in Hindi | Make API for React, Angular, Vue */}
<hr />
<hr />
<hr />
{/* Lecture 58: Integrate JSON Server API and Loader */}
<h1>Integrate JSON Server API and Loader</h1>
{/* <IntegrateJsonServerApiLoader/> */}
<hr />
{/* Lecture 59:  Routes and Pages for User list and Add User UI */}
<hr />
<ul>
    <li><NavLink to="/add">Add User</NavLink></li>
  <li><NavLink to="/">Home</NavLink></li>

</ul>

<UserList/>

<Routes>
    <Route path="/add" element={<AddUserApi/>} />
  <Route path="/userlist" element={<UserList/>} />

</Routes>


          </div>

          

    </>


  )


}



// Object Props

let userObj = {
  name: "Vicky",
  age: "30",
  email: "vicky@gmail.com"

}
let userObj1 = {
  name: "Sarfraz",
  age: "31",
  email: "sarfraz@gmail.com"

}
let userObj2 = {
  name: "Waqas",
  age: "30",
  email: "waqas@gmail.com"

}

//Arrays Props
let collegeNames = ["Superior","Scope","Punjab"]


// =================================================================
function Car (){
  return(
    <h1>My Car is Ferrari</h1>
  ) 
}

function Colors () {
  return (
    <h1>The color of my Car is Red.</h1>
  )
}

function increment(){
  return 10 + 11;
}

export default App

  