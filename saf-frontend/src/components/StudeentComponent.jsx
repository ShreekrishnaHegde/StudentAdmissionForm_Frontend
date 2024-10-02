import React, { useState } from 'react'
import { createStudent } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export const StudeentComponent = () => {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const navigator=useNavigate();


  const handleFirstName= (e) => setFirstName(e.target.value);
  const handleLastName= (e) => setLastName(e.target.value);
  const handleEmail= (e) => setEmail(e.target.value);

  function savedStudent(e){
    e.preventDefault();
    const student={firstName,lastName,email};
    console.log(student);
    createStudent(student).then((response)=>{
      console.log(response.data);
      navigator('/students');
    })
  }
  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Student Details</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input
                  type='text'
                  placeholder='Enter Student First Name'
                  name='firstName'
                  value={firstName}
                  className='form-control'
                  onChange={handleFirstName}
                >
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                  type='text'
                  placeholder='Enter Student Last Name'
                  name='lastName'
                  value={lastName}
                  className='form-control'
                  onChange={handleLastName}
                >
                </input>
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                  type='text'
                  placeholder='Enter Student Email'
                  name='email'
                  value={email}
                  className='form-control'
                  onChange={handleEmail}
                >
                </input>
              </div>
              <button className='btn btn-success' onClick={savedStudent}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
