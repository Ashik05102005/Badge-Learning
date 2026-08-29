import React, { useEffect, useReducer } from 'react'
import { useAddNotes } from '../Hooks/useAddNotes'
import { useEditNote } from '../Hooks/useEditNote'
import { useQueryClient } from '@tanstack/react-query'




const initialState = { data: { title: "", content: "" } }

function reducer(state, action) {
    switch (action.type) {
        case "add": {
            return { data: { ...state.data, [action.name]: action.payload } }
        }
        case "setinitialState": {
            return { data: { title: "", content: "" } }
        }
        case "setEdit": {
            return {
                data: {
                    title: action.payload.title,
                    content: action.payload.content,
                    id: action.payload.id
                }
            }
        }
        default: return state
    }
}


function NewForm({ editData, setEditData }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const mutateNotes = useAddNotes();
    const editNotes = useEditNote();
    const queryClient = useQueryClient();


    useEffect(() => {
        if (editData) {
            console.log("editing")
            dispatch({ type: "setEdit", payload: editData });
        }
    }, [editData])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editData) {
            console.log(state.data)
            console.log(editData);
            editNotes.mutate({
                id: state.data.id,
                data: state.data
            },
            {
                onSuccess : ()=>{
                    console.log("edited suceesFulluyy");
                    queryClient.invalidateQueries({
                        queryKey:['notes'],
                    })
                }
            })
            dispatch({type:"setinitialState"})
            return;
        }
        if (state.data.title.trim() === "" || state.data.content.trim() === "") {
            alert("fill the feilds")
            return
        }

        console.log(state.data);

        mutateNotes.mutate(state.data, {
            onSuccess: () => {
                console.log("succeed");
                dispatch({ type: "setinitialState" })
            }
        });

    }
    return (
        <div className='m-3 p-5 border rounded-xl border-gray-200'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5'>
                <input
                    value={state.data.title}
                    onChange={(e) => dispatch({ type: "add", name: "title", payload: e.target.value })}
                    className='border px-3 py-3 w-full rounded border-gray-300'
                    placeholder='title' />
                <input
                    value={state.data.content}
                    onChange={(e) => dispatch({ type: "add", name: "content", payload: e.target.value })}
                    className='border px-3 py-3 w-full rounded border-gray-300'
                    placeholder='content' />
                <button
                    className='border py-3 rounded'
                >Submit</button>
            </form>
        </div>
    )
}

export default NewForm