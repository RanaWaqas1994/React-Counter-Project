import Header from "./assets/Header"
import UserComponent,{AdminPanel,AdminLogin, AdminNo} from "./UserComponent";
import JsxUse from "./JsxUse";
import ToDo from "./ToDo";
import CurlyBraces from "./CurlyBraces";
import NewEvents from "./NewEvents";
import NewHooks from "./NewHooks";
import TestCounter from "./TestCounter";
function App (){
    // alert(increment());
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
    </>

  )
}

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

  