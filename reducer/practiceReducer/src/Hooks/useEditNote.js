import { useMutation } from "@tanstack/react-query"
import { editNote } from "../Service/editNote"

export const useEditNote =()=>{
    return useMutation({
        mutationFn: editNote,
    })
}