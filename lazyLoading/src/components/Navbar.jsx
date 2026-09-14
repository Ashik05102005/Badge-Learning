import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
    const cart = useSelector(state=>state.cart.cart)
    return (
        <div>
        <nav className=" text-black px-6 py-8   rounded-xl  w-full">
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                <Link
                    to="/"
                    className="text-2xl font-bold"
                >
                    📚 Mini Book Store
                </Link>

                <div className="flex gap-6">
                    <Link
                        to="/"
                        className="hover:text-gray-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/books"
                        className="hover:text-gray-300"
                    >
                        Books
                    </Link>
                    
                    <Link
                        to="/cart"
                        className="hover:text-gray-300"
                    >
                        <div className="relative ">
                            <span>Cart</span>
                            <span className="text-white absolute right-0 top-0 translate-x-4 -translate-y-3 bg-gray-900 px-2 rounded-full ">{cart.length}</span>
                        </div>
                    </Link>

                    <Link
                        to="/about"
                        className="hover:text-gray-300"
                    >
                        About
                    </Link>
                </div>

            </div>
        </nav>
        </div>
    );
}

export default Navbar;