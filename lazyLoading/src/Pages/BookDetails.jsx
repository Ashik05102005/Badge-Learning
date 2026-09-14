import React from "react";
import { Link, useParams } from "react-router-dom";
// import { books } from "./Books";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Slice/cartSlice";
import { useQuery } from "@tanstack/react-query";
import { fetchBookById, fetchBooks } from "../Services/bookApi";

function BookDetails() {

    const { id } = useParams();
    const cart = useSelector(state=>state.cart.cart);
    const dispatch = useDispatch()

    const handleAddToCart = (book)=>{
        const existingCart = cart.filter(item=>item.id===book.id);
        if(existingCart.length===0){
            dispatch(addToCart(book));
        }
    }

    console.log(cart)

    const {data:book,isLoading,error} = useQuery({
        queryKey : ["books",id],
        queryFn :()=> fetchBookById(id)
    })

    if(isLoading) return <h1>Loading....</h1>

   

    console.log(book);

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">
                        Book Not Found
                    </h1>

                    <Link
                        to="/books"
                        className="inline-block mt-5 bg-gray-900 text-white px-5 py-2 rounded-lg"
                    >
                        Back to Books
                    </Link>
                </div>
            </div>
        );
    }

    return (
        
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-5xl mx-auto px-6 py-12">

                <div className="bg-white rounded-2xl p-8 grid md:grid-cols-2 gap-10">

                    <img
                        src={book.image}
                        alt={book.title}
                        className="w-full h-[450px] object-cover rounded-xl"
                    />

                    <div className="flex flex-col justify-center">

                        <p className="text-gray-500">
                            {book.author}
                        </p>

                        <h1 className="text-4xl font-bold mt-2">
                            {book.title}
                        </h1>

                        <p className="text-2xl font-bold mt-6">
                            ₹{book.price}
                        </p>

                        <p className="text-gray-600 mt-6">
                            A great book for anyone interested in
                            learning, personal growth and improving
                            their daily life.
                        </p>

                        <button 
                        onClick={()=>handleAddToCart(book)}
                        className="mt-8 bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700">
                            Add to Cart
                        </button>

                        <Link
                            to="/books"
                            className="text-center mt-4 border border-gray-300 py-3 rounded-lg"
                        >
                            Back to Books
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default BookDetails;