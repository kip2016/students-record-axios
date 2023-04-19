import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    'firstName': '',
    'lastName': '',
    'Reg_No': '',
    'course': ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3000/students', values)
    .then(res => {
      alert('Student was added successfully');
      navigate('/');
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h1>Add a Student</h1>
    
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
      <label htmlFor='firstname'>FirstName:</label>
      <input type='text' name='firstname' className='form-control' placeholder='FirstName' onChange={e => setValues({...values, firstName:e.target.value 
      })}/>
      </div>
      <div className='mb-3'>
        <label htmlFor='lastname'>LastName:</label>
        <input type='text' name='lastname' className='form-control' placeholder='LastName' onChange={e => setValues({...values, lastName:e.target.value
      })}/>
      </div>

      <div className='mb-3'>
      <label htmlFor='Reg_No'>Reg_No:</label>
      <input type='text' name='Reg_No' className='form-control' placeholder='Reg_No' onChange={e => setValues({...values, Reg_NO:e.target.value
      })}/>
      </div>

      <div className='mb-3'>
      <label htmlFor='course'>Course:</label>
      <input type='text' name='course' className='form-control' placeholder='Course' onChange={e => setValues({...values, course:e.target.value
      })}/>
      </div>
      <button className='btn btn-success'>Submit</button>
      <Link to='/' className='btn btn-primary ms-3'>Back</Link>
    
    </form>

    </div>
      
    </div>
  )
}

export default Create
