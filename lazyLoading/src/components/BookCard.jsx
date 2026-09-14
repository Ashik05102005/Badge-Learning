import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/Slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function BookCard({ book }) {

    const dispatch = useDispatch()
    const cart = useSelector((state)=>state.cart.cart)
    const handleAddToCart = (book)=>{
            const existingCart = cart.filter(item=>item.id===book.id);
            if(existingCart.length===0){
                dispatch(addToCart(book));
            }
        }
    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">

            <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover"
            />

            <div className="p-4">

                <h2 className="text-lg font-semibold">
                    {book.title}
                </h2>

                <p className="text-gray-500 mt-1">
                    {book.author}
                </p>

                <p className="text-xl font-bold mt-3">
                    ₹{book.price}
                </p>

                <Link
                    to={`/books/${book.id}`}
                    className="block text-center mt-4 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700"
                >
                    View Details
                </Link>
                <button
                onClick={()=>handleAddToCart(book)}
                className="block text-center mt-4 bg-gray-50 text-gray-900 border py-2 rounded-lg hover:bg-gray-700 w-full"
                >
                    Add To cart
                </button>

            </div>

        </div>
    );
}

export default BookCard;