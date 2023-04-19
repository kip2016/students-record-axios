import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const Read = () => {
  const {id} = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/students/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [id])
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50  bg-white border shadow rounded px-5 pt-3 pb-5'>
        <h3>Detail of Student</h3>
        <hr />

        <div className='mb-2'>
          <strong>FirstName:{data.firstName}</strong>
        </div>

        <div className='mb-2'>
        <strong>LastName:{data.lastName}</strong>
        </div>

        <div className='mb-2'>
          <strong>Reg_NO:{data.Reg_No}</strong>
        </div>
        
        <div className='mb-3'>
          <strong>Course:{data.course}</strong>
        </div>
        <Link to={`/update/${id}`} className='btn btn-success'>Edit</Link>
        <Link to='/' className='btn btn-primary ms-3'>Back</Link>
        
      </div>
      
    </div>
  )
}

export default Read
