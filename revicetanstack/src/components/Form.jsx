import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { editProducts } from '../Services/productApi';

const initialState = {
    name: '',
    price: '',
    rating: '',
    stock: '',
    category: ''
};

const reducer = (state,action)=>{
    if(action.type==="addData"){
        return {...state , [action.name] : action.payload}
    }
    
    else{
        return state
    }
}

// const initialReducer = 

function Form({ product, showForm, setShowForm }) {

    const [formData, setFormData] = useState(initialState);

    const [state,dispatch ] = useReducer(reducer,{name: '' , age : ''});



    const inputRef = useRef();

    const productMutation = useMutation({
        mutationFn: editProducts
    })

    const queryClient = useQueryClient();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        productMutation.mutate({
            id: formData.id,
            data: formData
        }
            , {
                onSuccess: () => {
                    console.log("succeedd");
                    queryClient.invalidateQueries({
                        queryKey: ['product', product.id]
                    })
                }
            })

    }

    const handleReducer = (e)=>{
        e.preventDefault();
        console.log(state)

    }

    useEffect(() => {
        setFormData(product)
    }, [product])


    return (
        <div className={showForm ? 'flex m-3 justify-center' : 'hidden'}>
            <form
                className='grid gap-5 w-2/3 border px-6 py-8 rounded border-gray-300'
                onSubmit={handleSubmit}>
                <div className=' flex justify-end text-xl'>
                    <span onClick={() => setShowForm(false)}> x</span>
                </div>
                <div className='flex gap-2'>
                    <input
                        ref={inputRef}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        value={formData.name}
                        className='border p-2 rounded-md border-gray-300 w-full '
                        placeholder='name'
                    />
                    <button
                    type='button'
                    className='border px-3 rounded bg-amber-900 text-white'
                    onClick={()=>{inputRef.current.focus()}}
                    >focus</button>
                </div>

                <input
                    value={formData.price}
                    onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                    className='border p-2 rounded-md border-gray-300'
                    placeholder='price'
                />
                <input
                    onChange={(e) => setFormData(prev => ({ ...prev, rating: e.target.value }))}
                    value={formData.rating}
                    className='border p-2 rounded-md border-gray-300'
                    placeholder='rating'
                />
                <input
                    value={formData.stock}
                    onChange={(e) => setFormData(prev => ({ ...prev, stock: e.target.value }))}
                    className='border p-2 rounded-md border-gray-300'
                    placeholder='stock'
                />
                <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className='border p-2 rounded-md border-gray-300'>
                    <option value='Electronics'>Electronics</option>
                    <option value={'Fashion'}>Fashion</option>
                    <option value={'Accessories'}>Accessories</option>
                </select>

                <button
                
                    className='border p-2 rounded bg-amber-900 text-white'
                >Edit</button>

            </form>
            <div>
                <form 
                onSubmit={handleReducer}
                className='border mx-3 p-2 border-gray-300 rounded'
                >
                    <input 
                    className='border p-2 rounded-md border-gray-300 w-full '
                    type='text'
                    placeholder='name'
                    onChange={(e)=>dispatch({type: "addData" , name: "name" , payload : e.target.value })}
                    ></input>
                    <input
                    className='border p-2 rounded-md border-gray-300 w-full mt-2 '
                    type='text'
                    placeholder='age'
                    onChange={(e)=>dispatch({type: "addData" , name: "age" , payload : e.target.value })}
                    ></input>
                    <button className='border p-2 rounded bg-amber-900 text-white mt-2 w-full'>add</button>
                </form>
            </div>
        </div>
    )
}

export default Form