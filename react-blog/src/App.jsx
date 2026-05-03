import React from 'react'
import UserList from "./UserList";
import { Routes , Route, NavLink, Link} from "react-router";
import AddUserApi from "./AddUserApi";
import EditUserAPI from './EditUserAPI';
import SimpleValidation from './SimpleValidation';
import UseActionHookValidation from './UseActionHookValidation';
import RestAPIs from './RestAPIs';
export default function App() {
  return (
    <div>
<ul className='user-lists'>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/add">Add User</NavLink></li>
</ul>



<Routes>
  <Route path="/" element={<UserList/>} />
  <Route path="/add" element={<AddUserApi/>} />
  <Route path="/edit/:id" element={<EditUserAPI/>} />
</Routes>

<hr />
 {/* Lecture: 65 simple validation on input fields */}
<SimpleValidation/>

<hr />
{/* <!-- Lecture: 66 validation with useActionState --> */}
<UseActionHookValidation/>

{/* Lecture: 67 useReducer Hook */}

<hr />
{/* <!-- Lecture: 68 Call Rest API with use API --> */}
<RestAPIs/>

    </div>
  )
}
