import React, { useState } from 'react'
import { useNotes } from '../Hooks/useNotes'
import {useNavigate} from "react-router-dom"

function NoteList({onEdit}) {
    const [page,setPage] = useState(1);
    const navigate = useNavigate();
    const {data:notes , isLoading , error } = useNotes();
    if(isLoading) return <h1>Loading....</h1>
    if(error) return <h1>error....</h1>
    console.log(notes);

    const limit =4;
    const totalpages = Math.ceil(notes.length/4);
    const startingIndex = limit*(page-1);
    const endingIndex = startingIndex+limit ;



  return (
    <>
    <div className='m-3 border border-gray-200 p-3 rounded-xl grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {
            notes.slice(startingIndex,endingIndex).map(item=>(
                <div
                key={item.id}
                onClick={()=>navigate(`display/${item.id}`)}
                className="border p-3 rounded-md border-gray-300 ">
                    <p className='text-3xl font-sans'>{item.title.toUpperCase()}</p>
                    <p className='text-gray-600'>{item.content}</p>
                    <button 
                    className='border px-6 py-1 bg-gray-900 text-gray-50 rounded mt-3'
                    onClick={(e)=>{
                            e.stopPropagation();
                            onEdit(item)
                    }}>edit</button>
                </div>
            ))
        }
    </div>
        <div className='border w-fit  rounded border-gray-300 text-gray-800 m-3'>
            <button 
            disabled={page===1}
            onClick={()=>setPage(prev=>prev-1)}
            className='border-r py-2 px-4 border-gray-300 disabled:text-gray-200'>prev</button>
            <span className='px-4'>{page}</span>
            <button 
            disabled={page===totalpages}
            onClick={()=>setPage(prev=>prev+1)}
            className='border-l py-2 px-4 border-gray-300 disabled:text-gray-200'>next</button>
        </div>
    </>
  )
}

export default NoteList