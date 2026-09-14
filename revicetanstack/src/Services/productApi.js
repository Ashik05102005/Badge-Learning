import axios from "axios"

export const fetchProducts = async()=>{
    const response  = await axios.get(`http://localhost:3000/products`);
    return response.data
}

export const fetchById = async(id)=>{
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    return response.data
}

export const editProducts = async({id,data})=>{
    const response = await axios.put(`http://localhost:3000/products/${id}`,data);
    return response.data ;
}