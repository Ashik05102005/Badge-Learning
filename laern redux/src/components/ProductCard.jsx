import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slices/cartSlice";
import { useSearchParams } from "react-router-dom";

function ProductCard({ name, price }) {

  const dispatch = useDispatch();

  const cart = useSelector(state=>state.cart.cart);

  const handleCart = (data)=>{
    const check = cart.filter(item => data.name === item.name);
    console.log(check)
    if(check.length===0){
      dispatch(addToCart(data))
    }
    else {
      alert("it is alredy in your cart")
    }
  }
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-5">
        <span className="text-gray-400">
          Product Image
        </span>
      </div>

      <h2 className="text-xl font-semibold text-gray-800">
        {name}
      </h2>

      <p className="text-2xl font-bold text-green-600 mt-2">
        ₹{price}
      </p>

      <button 
      onClick={()=>{handleCart({name :name,price :price})}}
      className="mt-5 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;