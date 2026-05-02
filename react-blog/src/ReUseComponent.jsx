import React from 'react'
import ReUseMapComponent from './ReUseMapComponent'

export default function ReUseComponent() {
    const CollageStd = [
        {
        id: '1',
        name: 'Waqas',
        class: 'IT',
        age: '32'
        },
                {
        id: '2',
        name: 'Rana',
        class: 'CSS',
        age: '31'
        },
                {
        id: '3',
        name: 'Asim',
        class: 'ITu',
        age: '32'
        },
                {
        id: '4',
        name: 'Aslam',
        class: 'IT',
        age: '32'
        }
    ]
  return (
    <div>
      <h3>Reuse Component in React</h3>
      <hr />
      {
        CollageStd.map((data)=> (
            <div key={data.id}>
                 <ReUseMapComponent mapping={data} /> 
            </div>
        ))
      }
    </div>
  )
}
