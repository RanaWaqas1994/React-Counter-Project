import React from 'react'

export default function MappingFunction() {
    const student = [
        {
        id: '1',
        name: 'Waqas',
        class: 'Computer',
        Age: '32'
        },
        {
        id: '2',
        name: 'Sam',
        class: 'React',
        Age: '30'
        },
        {
        id: '3',
        name: 'Peter',
        class: 'Angular',
        Age: '31'
        },
                {
        id: '4',
        name: 'Sona',
        class: 'Angular',
        Age: '31'
        },
                {
        id: '5',
        name: 'Ragnar',
        class: 'Angular',
        Age: '31'
        },
                {
        id: '6',
        name: 'Fella',
        class: 'Angular',
        Age: '31'
        }       
    ]
  return (
    <div>
        <h2>Loop in JSX using Map Function</h2>
        <h3>Dummy Table</h3>
        <table border={5}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Waqas</td>
                    <td>Computer</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sam</td>
                    <td>React</td>
                    <td>30</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Peter</td>
                    <td>React Native</td>
                    <td>31</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Anwar</td>
                    <td>Angular</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Asghar</td>
                    <td>Python</td>
                    <td>38</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Faisal</td>
                    <td>CSS</td>
                    <td>40</td>
                </tr>
            </tbody>
        </table>
        <h3>Dynamic Table</h3>
        <table border={5}>
            <thead>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>CLASS</th>
                <th>AGE</th>
                </tr>
            </thead>
            <tbody>
                {student.map( (user)=>(
                    <tr  key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.class}</td>
                        <td>{user.Age}</td>
                    </tr>
                ))
                }
                <tr>

                </tr>
            </tbody>
        </table>
      
    </div>
  )
}
