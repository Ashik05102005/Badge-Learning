import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../Services/productApi';
import { useNavigate } from 'react-router-dom';

const ProductsList = () => {

    const [search, setSearch] = useState('');
    const [debounceSearch, setDebounceSearch] = useState('');
    const [category,setCategory] = useState('All')
    const navigate = useNavigate();

    const {
        data: products,
        isLoading,
        error
    } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceSearch(search)
        }, 500)
        return () => clearTimeout(timer)
    }, [search])



    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h1 className="text-2xl font-semibold text-gray-700">
                    Loading...
                </h1>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center mt-10">
                <h1 className="text-xl text-red-500">
                    Something went wrong!
                </h1>
            </div>
        );
    }


    const filteredProducts = products.filter((item) => {
        const searchMatch = item.name.toLowerCase().includes(debounceSearch.toLowerCase())

        const categorymatch = category==="All"||item.category===category
        return searchMatch&&categorymatch
    })
    return (
        <div className="min-h-screen bg-gray-100 px-6 py-10">

            {/* Heading */}
            <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
                Our Products
            </h1>
            <div className=' my-6 flex gap-3'>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full border py-2 rounded-md border-gray-300 px-4  focus:outline-gray-500'
                    type='search'></input>
                <select 
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                className='border rounded-md border-gray-300 text-gray-600 px-4 '>
                    <option value='All'>All</option>
                    <option value='Electronics'>Electronics</option>
                    <option value={'Fashion'}>Fashion</option>
                    <option value={'Accessories'}>Accessories</option>
                </select>
            </div>
            

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                {filteredProducts.map(item => (

                    <div
                        key={item.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                    >

                        {/* Product Image */}
                        <div className="h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                            <img
                                onClick={() => navigate(`/${item.id}`)}
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-5">

                            <h2 className="text-lg font-semibold text-gray-800 mb-1">
                                {item.name}
                            </h2>

                            <p className="text-sm text-gray-500 mb-3">
                                {item.category}
                            </p>

                            <div className="flex items-center justify-between mb-3">

                                <span className="text-xl font-bold text-green-600">
                                    ₹{item.price}
                                </span>

                                <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md">
                                    ⭐ {item.rating}
                                </span>

                            </div>

                            <p className="text-sm text-gray-500 mb-4">
                                Stock: {item.stock}
                            </p>

                            {/* Button */}
                            <button
                                className="w-full bg-blue-600 text-white py-2.5 rounded-lg
                           hover:bg-blue-700 transition duration-200
                           font-medium"
                            >
                                Add to Cart
                            </button>

                        </div>
                    </div>

                ))}

            </div>
        </div>
    );
};

export default ProductsList