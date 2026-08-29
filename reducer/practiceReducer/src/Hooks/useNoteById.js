import { useQuery } from "@tanstack/react-query"
import { fetchNoteById } from "../Service/fetchnoteById"


export const useNoteById = (id)=>{
    return useQuery({
        queryKey:['note' ,id],
        queryFn :()=> fetchNoteById(id)
    })
}