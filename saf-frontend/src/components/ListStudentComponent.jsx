import React,{useState,useEffect} from 'react'
import { deleteStudent, listStudents, sortStudents } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';


const ListStudentComponent = () => {
  
    const [students,setStudents]=useState([]);
    const navigator=useNavigate();

    useEffect(() => {
        getAllstudents();
    },[])

    function getAllstudents(){
        listStudents().then((response) => {
            setStudents(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    function getSortedStudents(){
        sortStudents().then((response) => {
            setStudents(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewStudent(){
        navigator('/add-student');
        
    }

    function updateStudent(id){
        navigator(`/edit-student/${id}`);
    }

    function removeStudent(id){
        console.log(id);
        deleteStudent(id).then((response) =>{
            getAllstudents();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Students</h2>
        <button className='btn btn-primary mb-2' onClick={addNewStudent}>Add Student</button>
        <button className='btn btn-primary mb-2' onClick={getSortedStudents} style={{marginLeft: '10px'}}>Sort (ByFirstName)</button>
        <table className='table table-success table-striped'>
            <thead>
                <tr>
                    <th>Student Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map(student =>
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() =>updateStudent(student.id)}>Update</button>
                                <button className='btn btn-danger' onClick={() =>removeStudent(student.id)} 
                                    style={{marginLeft:'10px'}}
                                    >Delete</button>
                            </td>
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


/*
-Hooks are essentially functions that let you access React features from functional components.
->Side effects in programming, particularly in the context of React, refer to any actions that 
    interact with the outside world or modify the state of the application beyond the component itself.
->useEffect hook  performs side effects in functional components, such as:
    Fetching data
    Setting up subscriptions
    Creating timers
    Mutating the DOM 
*/