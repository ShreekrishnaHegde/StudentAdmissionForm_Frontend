import React, { useState } from 'react'
import { createStudent } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

export const StudentComponent = () => {
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const navigator=useNavigate();
  const {id}=useParams();

  const[errors,setErrors]=useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const handleFirstName= (e) => setFirstName(e.target.value);
  const handleLastName= (e) => setLastName(e.target.value);
  const handleEmail= (e) => setEmail(e.target.value);

  function saveStudent(e){
    e.preventDefault();
    if(validateForm()){
      const student={firstName,lastName,email};
      console.log(student);
      createStudent(student).then((response)=>{
      console.log(response.data)
      navigator('/students')
      })
    }

    
  }

  function validateForm(){
    let valid=true;
    const errorsCopy={... errors};
    if(firstName.trim()){
      errorsCopy.firstName='';
    }
    else{
      errorsCopy.firstName='First name is required.';
      valid=false;
    }
    if(lastName.trim()){
      errorsCopy.lastName='';
    }
    else{
      errorsCopy.lastName='LastName is required.';
      valid=false;
    }
    if(email.trim()){
      errorsCopy.email='';
    }
    else{
      errorsCopy.email='Email is required.'
      valid=false;
    }
    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle(){
    if(id)
      return <h2 className='text-center'>Update Student</h2>
    else
      return <h2 className='text-center'>Add Student</h2>
  }
  return (
    <div className='container'>
      <br></br>
      <div className='row'>
        {
          pageTitle()
        }
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
                  className={`form-control ${errors.firstName ? 'is-invalid':''}`}
                  onChange={handleFirstName}
                >
                </input>
                {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input
                  type='text'
                  placeholder='Enter Student Last Name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${errors.lastName ? 'is-invalid':''}`}
                  onChange={handleLastName}
                >
                </input>
                {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
              </div>

              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input
                  type='text'
                  placeholder='Enter Student Email'
                  name='email'
                  value={email}
                  className={`form-control ${errors.email ? 'is-invalid':''}`}
                  onChange={handleEmail}
                >
                </input>
                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}

              </div>
              <button className='btn btn-success' onClick={saveStudent}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
