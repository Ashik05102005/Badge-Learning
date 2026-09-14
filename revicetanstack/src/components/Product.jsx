import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import {  useParams , useNavigate} from 'react-router-dom';
import { fetchById } from '../Services/productApi';
import Form from './Form';

function Product() {
  const { id } = useParams();
  const [showForm,setShowForm] = useState(false)
  const navigate = useNavigate()

  const {
    data: product,
    isLoading,
    error
  } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchById(id)
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-gray-600">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl text-red-500">
          Something went wrong!
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div onClick={()=>navigate('/')}>
        back
      </div>

      <Form showForm={showForm} setShowForm={setShowForm} product={product} />
      
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Product Image */}
          <div className="bg-gray-100 flex items-center justify-center p-8 ">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-contain rounded-3xl hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Details */}
          <div className="p-8 flex flex-col justify-center">

            <p className="text-sm text-blue-600 font-medium uppercase mb-2">
              {product.category}
            </p>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>

            <p className="text-3xl font-bold text-green-600 mb-5">
              ₹{product.price}
            </p>

            <div className="flex items-center gap-3 mb-5">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-lg">
                ⭐ {product.rating}
              </span>

              <span className="text-gray-500">
                Stock: {product.stock}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              This is a high-quality {product.category} product.
              Get this product now at the best price.
            </p>

            <button
              className="w-full bg-blue-600 text-white py-3 rounded-xl
                         font-semibold hover:bg-blue-700
                         transition duration-200"
            >
              Add to Cart
            </button>
            <button
              onClick={()=>setShowForm(true)}
              className="w-full border border-blue-600 text-blue-600 py-3 rounded-xl mt-2
                         font-semibold 
                         transition duration-200"
            >
              edit
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Product;