import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const checkoutData = JSON.parse(localStorage.getItem("order")) || [];
  console.log(checkoutData)
  return (
    <div className='max-w-full'>
      <Navbar />
      <div className='grid md:grid-cols-2 gap-5 px-10  m-2 py-3'>
        {checkoutData.map((item, index) => (
          <div className='flex border border-gray-200 rounded-xl'>
            <div>
              <img
                className='h-60 w-50 rounded-l-xl'
                src={item.image}></img>
            </div>
            <div className='p-4'>
              <p className='text-3xl font-semibold'>{item.title}</p>
              <p className='text-gray-500'>{item.author}</p>
              <p className='mt-5 text-2xl font-medium'>Rs  {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='mx-10 mb-5 rounded-xl  p-4 border border-gray-300'>
        <h1 className='text-3xl font-bold'>Total</h1>
        <h1 className='text-2xl '>{checkoutData.reduce((total, item) => total += item.price, 0)}</h1>
        <button 
        onClick={()=>navigate('/')}
        className=' mt-3 border w-full py-2 rounded-md bg-black text-white'>
          Buy Now
        </button>
      </div>

    </div>
  )
}

export default Checkout