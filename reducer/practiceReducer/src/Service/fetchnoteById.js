import axios from "axios"


export const fetchNoteById = async (id)=>{
    const response = await axios.get(`http://localhost:3000/notes/${id}`);
    console.log(response.data);
    return response.data ;
}