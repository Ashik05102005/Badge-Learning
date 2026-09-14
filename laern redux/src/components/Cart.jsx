import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cart =  useSelector(state => state.cart.cart)
  return (
    <div className='border p-5 mt-5 rounded-xl bg-white border-gray-100 shadow-xl'>
        <h1 className='text-2xl mb-4 font-medium text-emerald-600'>Cart Items </h1>
        <div className='grid grid-cols-3 gap-3'>
            {
                cart.map(item =>(
                    <div className='border p-5 rounded-xl bg-black text-white '>
                        <h1 className='text-2xl font-medium'>{item.name}</h1>
                        <h1 className='text-xl text-emerald-600 font-medium mt-3'>₹ {item.price}</h1>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart