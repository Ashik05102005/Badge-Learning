import React from "react";
import BookCard from "../components/BookCard";
import Navbar from "../components/Navbar";
import { useQuery } from "@tanstack/react-query";
import { fetchBooks } from "../Services/bookApi";



function Books() {
    console.log("books rendered")
    const {data:books ,isLoading , error} = useQuery({
        queryKey:["books"],
        queryFn : fetchBooks
    });

    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>error :  {error}</h1>
    console.log(books)
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-6xl mx-auto px-6 py-10">

                <h1 className="text-3xl font-bold">
                    Books
                </h1>

                <p className="text-gray-500 mt-2">
                    Explore our collection
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">

                    {books.map((book) => (
                        <BookCard
                            key={book.id}
                            book={book}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}

export default Books;

// export { books };