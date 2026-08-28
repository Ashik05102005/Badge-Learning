import React from 'react'

export const ProductList = React.memo(({products,onDelete,onEdit}) => {
    console.log(products)
  return (
    <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-5' >
        {
            products.map(item=>(
                <div 
                className='border p-3 rounded-md border-gray-200 shadow'
                key={item.id}>
                    <h1 className='text-2xl font-medium'>{item.name}</h1>
                    <h1>{item.price}</h1>
                    <div className='flex gap-3'>
                        <button 
                        onClick={()=>onDelete(item.id)}
                        className='border px-4 py-1 rounded mt-3'>delete </button>
                        <button 
                        onClick={()=>onEdit(item)}
                        className='border px-4 py-1 rounded mt-3'>edit </button>
                    </div>
                    
                </div>
            ))
        }
    </div>
  )
})
