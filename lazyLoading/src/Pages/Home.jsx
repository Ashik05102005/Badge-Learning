import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    console.log("home rendered")
    return (
        <>
        <Navbar />
        <div className="min-h-[calc(100vh-72px)] bg-gray-100">

            <section className="max-w-6xl mx-auto px-6 py-24">

                <div className="max-w-2xl">

                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                        Welcome to
                    </p>

                    <h1 className="text-5xl font-bold mt-3">
                        Mini Book Store
                    </h1>

                    <p className="text-gray-600 text-lg mt-6">
                        Discover interesting books and find your
                        next favorite read.
                    </p>

                    <Link
                        to="/books"
                        className="inline-block mt-8 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
                    >
                        Browse Books
                    </Link>

                </div>

            </section>

        </div>
        </>
    );
}

export default Home;