import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { editProducts } from '../Services/productApi';

const initialState = {
    name : '' ,
    price : '',
    rating : '',
    stock : '',
    category : ''
}

function Form({product , showForm , setShowForm}) {

    const[formData,setFormData] = useState(initialState);

    const productMutation = useMutation({
        mutationFn :editProducts
    })

    const queryClient = useQueryClient();

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(formData);
        productMutation.mutate({
            id : formData.id , 
            data : formData
        }
        ,{
        onSuccess:()=>{
            console.log("succeedd");
            queryClient.invalidateQueries({
                queryKey : ['product',product.id]
            })
        }
        })

    }

    useEffect(()=>{
        setFormData(product)
    },[product])


    return (
        <div className={showForm?'flex m-3 justify-center':'hidden'}>
            <form 
            className='grid gap-5 w-2/3 border px-6 py-8 rounded border-gray-300'
            onSubmit={handleSubmit}>
                <div className=' flex justify-end text-xl'>
                    <span onClick={()=>setShowForm(false)}> x</span>
                </div>
                <input
                    onChange={(e)=>setFormData(prev=>({...prev,name : e.target.value}))}
                    value={formData.name}
                    className='border p-2 rounded-md border-gray-300'
                    placeholder='name'
                />
                <input
                    value={formData.price}
                    onChange={(e)=>setFormData(prev=>({...prev,price : e.target.value}))}
                    className='border p-2 rounded-md border-gray-300'
                    placeholder='price'
                />
                <input
                    onChange={(e)=>setFormData(prev=>({...prev,rating : e.target.value}))}
                    value={formData.rating}
                    className='border p-2 rounded-md border-gray-300'
                    placeholder='rating'
                />
                <input
                    value={formData.stock}
                    onChange={(e)=>setFormData(prev=>({...prev,stock : e.target.value}))}
                    className='border p-2 rounded-md border-gray-300'
                    placeholder='stock'
                />
                <select
                value={formData.category}
                onChange={(e)=>setFormData(prev=>({...prev,category : e.target.value}))}
                className='border p-2 rounded-md border-gray-300'>
                    <option value='Electronics'>Electronics</option>
                    <option value={'Fashion'}>Fashion</option>
                    <option value={'Accessories'}>Accessories</option>
                </select>

                <button
                type='submit'
                className='border p-2 rounded bg-amber-900 text-white'
                >Edit</button>

            </form>
        </div>
    )
}

export default Form