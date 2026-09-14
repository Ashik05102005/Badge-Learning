import axios from "axios"



export const fetchBooks = async()=>{
    const response = await axios.get(`http://localhost:3000/books`);
    console.log(response.data)
    return response.data
}

export const fetchBookById = async (id)=>{
    const response = await axios.get(`http://localhost:3000/books/${id}`)
    return response.data
}
