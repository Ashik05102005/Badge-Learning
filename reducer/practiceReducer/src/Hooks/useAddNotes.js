import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addNotes } from "../Service/addNotes"


export const useAddNotes = ()=>{

    const queryClient = useQueryClient()
    return useMutation({
        mutationFn : addNotes,
        onSuccess : ()=>{
            queryClient.invalidateQueries({
                queryKey : ["notes"]
            })
        }
    })
}