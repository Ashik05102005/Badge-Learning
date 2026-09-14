import React from 'react'
import { Link, useParams } from 'react-router-dom'

function ViewUser() {
  const { name } = useParams();
  const data = JSON.parse(localStorage.getItem("userData"));
  if (name === data?.name) {
    console.log("correct");
  }
  else {
    return <h1>Some thing went Wrong......</h1>
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col border p-3 rounded-xl gap-3 '>
        <Link 
        to={'/'}
        className=' flex justify-end text-red-500 hover:text-xl transition'>x</Link>
        <span>{data.name} </span>
        <span>{data.email} </span>
        <span>{data.age} </span>
      </div>
    </div>
  )
}

export default ViewUser