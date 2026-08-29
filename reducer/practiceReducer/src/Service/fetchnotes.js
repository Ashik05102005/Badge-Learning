import axios from "axios"



export const fetchnotes =async()=>{
    const response =  await axios.get(`http://localhost:3000/notes`);
    return response.data
}