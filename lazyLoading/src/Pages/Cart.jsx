import React from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Redux/Slice/cartSlice";

function Cart() {
    console.log("cart rendered");
    const cart = useSelector(state => state.cart.cart);
    console.log(cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkOutHandler = ()=>{
        if(cart.length!==0){
            // console.log(cart)
            dispatch(clearCart())
            localStorage.setItem("order",JSON.stringify(cart))
            navigate('/checkout')
        }
        else{
            alert("cart is empty")
        }
    }
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 py-10">

                <h1 className="text-3xl font-bold">
                    Your Cart
                </h1>

                <div className="bg-white rounded-xl p-6 mt-8 grid gap-3">
                    {cart?.map(item => (
                        <div className="flex items-center justify-between border-gray pb-5">

                            <div className="flex gap-3">
                                <div>
                                    <img src={item.image} className="w-20 h-25 object-cover rounded"/>
                                </div>
                                <div className="flex flex-col gap-1">
                                <h2 className="font-semibold">
                                    {item.title}
                                </h2>
                                <p className="text-gray-500">
                                    {item.author}
                                </p>
                                </div>

                            </div>

                            <p className="font-semibold">
                                {item.price}
                            </p>

                        </div>
                    ))

                    }



                    <div className="flex justify-between mt-6 text-xl font-bold">
                        <span>Total</span>
                        <span>{cart?cart.reduce((total,item)=>total+=item.price,0):0}</span>
                    </div>

                    <button 
                    onClick={checkOutHandler}
                    className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700">
                        Checkout
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Cart;