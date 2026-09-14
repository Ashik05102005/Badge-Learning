import React, { useContext, useState } from 'react'
import { MainContext } from '../MainContext';


const initialForm ={title : "" , category : "" , content : ""}
function Form() {
    const [formdata, setFormData] = useState(initialForm);
    const {dataList , setDataList , showForm , setShowForm } = useContext(MainContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formdata.title.trim()===""||formdata.category.trim()===""||formdata.content.trim()===""){
            alert("fill all feilds");
            return
        }
        console.log(formdata);
        setDataList(prev=>([...prev , {...formdata, id:Date.now()}]))

        setFormData(initialForm);
        setShowForm(false)
    }
    return (
        <div className={`min-h-screen bg-gray-100  items-center justify-center p-6 transition-all  ${showForm?"flex":"hidden"}`}>
            <form 
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">

                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex justify-between w-full ">
                    <p>Add Note</p>
                    <button 
                    onClick={()=>setShowForm(false)}
                    className='text-red-500 hover:scale-120'>x</button>
                </h2>

                <div className="space-y-4">
                    <input
                        type="text"
                        value={formdata.title}
                        onChange={(e)=>setFormData(prev=>({...prev,title:e.target.value}))}
                        placeholder="Note title"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="text"
                        value={formdata.category}
                        onChange={(e)=>setFormData(prev=>({...prev,category:e.target.value}))}
                        placeholder="Category"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        value={formdata.content}
                        onChange={(e)=>setFormData(prev=>({...prev,content:e.target.value}))}
                        placeholder="Write your note..."
                        rows="5"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                    >
                        Add Note
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Form