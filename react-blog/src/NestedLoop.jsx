import React from 'react'
import NestedLoopCollege from './NestedLoopCollege'

export default function NestedLoop() {
    //First we take object in Array then sub object Like:
    const collegeData = [
        {
            name: 'Kips College',
            class: 'Multi Classes',
            time: '9pm to 5pm',
            student: [
                {
                    name: 'Waqas',
                    age: '28',
                    degree: "ICS"
                },
                {
                    name: 'Sam',
                    age: '25',
                    degree: "FCS"
                },
                {
                    name: 'Mirha',
                    age: '18',
                    degree: "BIO"
                },
                {
                    name: 'Miraal',
                    age: '15',
                    degree: "CSS"
                }
                
            ]
        },
        {
            name: 'Punjab College',
            class: 'Multi Classes',
            time: '9pm to 4pm',
            student: [
                {
                    name: 'Waqas',
                    age: '28',
                    degree: "ICS"
                },
                {
                    name: 'Sam',
                    age: '25',
                    degree: "FCS"
                },
                {
                    name: 'Mirha',
                    age: '18',
                    degree: "BIO"
                },
                {
                    name: 'Miraal',
                    age: '15',
                    degree: "CSS"
                }
                
            ]
        },
        {
            name: 'Government College',
            class: 'Multi Classes',
            time: '10pm to 5pm',
            student: [
                {
                    name: 'Waqas',
                    age: '28',
                    degree: "ICS"
                },
                {
                    name: 'Sam',
                    age: '25',
                    degree: "FCS"
                },
                {
                    name: 'Mirha',
                    age: '18',
                    degree: "BIO"
                },
                {
                    name: 'Miraal',
                    age: '15',
                    degree: "CSS"
                }
                
            ]
        }        
    ]
  return (
    <div>
        <h1>Nested Loops</h1>
        {
            collegeData.map((college,index)=>(
                <div key={index}>
                    <NestedLoopCollege institute={college}/>


                </div>
            ))
        }
      
    </div>
  )
}
