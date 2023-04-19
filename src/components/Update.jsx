import React, {useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Update = () => {
  const {id} = useParams();
  // const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    'firstName': '',
    'lastName': '',
    'Reg_No': '',
    'course': ''
  })

  useEffect(() => {
    axios.get('http://localhost:3000/students/'+id)
    .then(res => {
      setValues(res.data)
    })
    .catch(err => console.log(err))
  }, [id])

  
  const handleUpdate = (event) => {
    event.preventDefault()
    axios.put('http://localhost:3000/students/'+id, values)
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
    <h1>Update Student Record</h1>
    
    <form onSubmit={handleUpdate}>
      <div className='mb-3'>
      <label htmlFor='firstname'>FirstName:</label>
      <input type='text' name='firstname' value={values.firstName} className='form-control' placeholder='FirstName' onChange={e => setValues({...values, firstName:e.target.value 
      })}/>
      </div>
      <div className='mb-3'>
        <label htmlFor='lastname'>LastName:</label>
        <input type='text' name='lastname' value={values.lastName} className='form-control' placeholder='LastName' onChange={e => setValues({...values, lastName:e.target.value 
      })}/>
      </div>

      <div className='mb-3'>
      <label htmlFor='Reg_No'>Reg_No:</label>
      <input type='text' name='Reg_No' value={values.Reg_No} className='form-control' placeholder='Reg_No' onChange={e => setValues({...values, Reg_No:e.target.value 
      })} />
      </div>

      <div className='mb-3'>
      <label htmlFor='course'>Course:</label>
      <input type='text' name='course' value={values.course} className='form-control' placeholder='Course' onChange={e => setValues({...values, course:e.target.value 
      })}/>
      </div>
      <button className='btn btn-success'>Update</button>
      <Link to='/' className='btn btn-primary ms-3'>Back</Link>
    
    </form>

    </div>
      
    </div>
  )
}

export default Update
