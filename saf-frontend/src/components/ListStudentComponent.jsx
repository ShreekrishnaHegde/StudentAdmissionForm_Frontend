import React from 'react'


const ListStudentComponent = () => {
    const dummy=[
        {
        "id":1,
        "firstName":"Krishna",
        "lastName":"Hegde",
        "email":"ramesh@gmail.com"
        },
        {
        "id":1,
        "firstName":"Krishna",
        "lastName":"Hegde",
        "email":"ramesh@gmail.com"
        },
        {
            "id":1,
            "firstName":"Krishna",
            "lastName":"Hegde",
            "email":"ramesh@gmail.com"
            },
            {
                "id":1,
                "firstName":"Krishna",
                "lastName":"Hegde",
                "email":"ramesh@gmail.com"
                },
                {
                    "id":1,
                    "firstName":"Krishna",
                    "lastName":"Hegde",
                    "email":"ramesh@gmail.com"
                    }

    ]
  return (
    <div className='container'>
        <h2>List of Students</h2>
        <table className='table table-success table-striped'>
            <thead>
                <tr>
                    <th>Student Name</th>
                    <th>firstname</th>
                    <th>lastName</th>
                    <th>Email id</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummy.map(student =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                        </tr>
                    )
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListStudentComponent

/*

->React functional components  are essentially JavaScript functions that return a React element.


->First we have to import react library.
->Here, We define a functional compenent named ListStudentCompoenent,
->The function returns a react element, which represents the UI that should be renderd.
->In this case, the returned element is a <div> element with the text "ListStudentComponent" inside it. 
    This will be rendered as a simple paragraph on the screen.
->This line exports the ListStudentComponent as the default export of the module. 
    This means that when you import this component in another file, you can use the default export without specifying its name.


->We declare variables using const if the value should not be changed
    We use const if the type of the variables should not be changed such as working with Arrays and objects
*/