import React, { useContext } from 'react'
import {SubjectContext} from "./ContextAPI"

export default function ContextApiSubjectHeading() {
    const SubjectHeading = useContext(SubjectContext)
  return (
    <div style={{background:"blue",padding:20}}>
        <h2>Context Api Subject Component is : {SubjectHeading}</h2>

      
    </div>
  )
}
