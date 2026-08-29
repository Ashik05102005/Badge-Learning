import { useQuery } from "@tanstack/react-query"
import { fetchnotes } from "../Service/fetchnotes"

export const useNotes = ()=>{
    return useQuery({
        queryKey : ['notes'],
        queryFn :fetchnotes 
    })
}