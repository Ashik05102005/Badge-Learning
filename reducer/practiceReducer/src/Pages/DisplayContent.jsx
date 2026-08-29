import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNoteById } from '../Hooks/useNoteById';

function DisplayContent() {
    const { id } = useParams();
    const { data: note, isLoading, error } = useNoteById(id);
    if (isLoading) return <h1>Loading</h1>
    return (
        <>
            <Link to={'/'} className='m-5'>{"<-  back"}</Link>
            <div className='m-5 p-3 border sm:w-1/3 rounded-md border-gray-200'>
                <p>title : {note.title}</p>
                <p>content : {note.content}</p>
            </div>
        </>
    )
}

export default DisplayContent