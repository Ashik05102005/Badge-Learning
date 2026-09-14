import React from "react";
import Navbar from "../components/Navbar";

function About() {
    console.log("about rendered")
    return (

        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-3xl mx-auto px-6 py-16">

                <h1 className="text-4xl font-bold">
                    About Mini Book Store
                </h1>

                <p className="text-gray-600 text-lg mt-6 leading-8">
                    Mini Book Store is a simple React project
                    created to practice React Router, lazy loading,
                    Suspense and component-based development.
                </p>

            </div>

        </div>
    );
}

export default About;