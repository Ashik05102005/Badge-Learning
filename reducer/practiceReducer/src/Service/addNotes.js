import axios from "axios"

export const addNotes = async(data)=>{
    const response = await axios.post(`http://localhost:3000/notes`,data);
    return response.data
}