import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
  const [data, setData] = useState([]);
  // const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:3000/students')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    const confirm = window.confirm('Would you like to delete?')
    if (confirm){
      axios.delete('http://localhost:3000/students/'+id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => console.log(err))
    }
  }
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <h1>List of Students</h1>
      
      <div className='w-75 rounded bg-white border shadow p-4'>
        <div className='d-flex justify-content-end'>
          <Link to='/create' className='btn btn-success btn-sm'>Add +</Link>
        </div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Reg_No</th>
              <th>Course</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.firstName}</td>
                <td>{d.lastName}</td>
                <td>{d.Reg_No}</td>
                <td>{d.course}</td>
                <td>
                  <Link to={`/read/${d.id}`} className='btn btn-info btn-sm me-2'>Read</Link>
                  <Link to={`/update/${d.id}`}  className='btn btn-primary btn-sm me-2'>Edit</Link>
                  <button onClick={e => handleDelete(d.id)}  className='btn btn-danger btn-sm'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  )


}

export default Home
