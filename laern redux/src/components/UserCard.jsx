import React from "react";
import { useNavigate } from "react-router-dom";

function UserCard({ name, email, age , id }) {

  const navigate = useNavigate();

  const viewHandler =(data)=>{
    console.log(data)
    localStorage.setItem("userData" ,JSON.stringify({...data,id}) );
    navigate(`/view/${data.name}`)
    
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
        <span className="text-xl font-bold text-blue-600">
          {name.charAt(0)}
        </span>
      </div>

      <h2 className="text-xl font-semibold text-gray-800">
        {name}
      </h2>

      <p className="text-gray-500 mt-1">
        {email}
      </p>

      <p className="text-gray-600 mt-2">
        Age: {age}
      </p>

      <button 
      onClick={()=>viewHandler({name,email,age})}
      className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        View Profile
      </button>
    </div>
  );
}

export default UserCard;