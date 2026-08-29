import axios from "axios"


export const editNote = async({id,data})=>{
    const response = await axios.put(`http://localhost:3000/notes/${id}`,data);
    return response.data
}