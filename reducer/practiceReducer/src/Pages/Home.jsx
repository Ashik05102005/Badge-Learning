import { useReducer, useState } from 'react'
import NewForm from '../components/NewForm'
import NoteList from '../components/NoteList'




function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      if (state.count < 10) {
        return { count: state.count + 1 }
      }

        return state
    }
    case "decrement":{
      if(state.count > -10){
        return { count: state.count - 1 }
      }
      return state
     }
     case "reset":{
      return {count:0}
     }
     case "add5":{
      return {count: state.count + 5}
     }
     case "sub5":{
      return {count: state.count - 5}
     }
    default:
      return state
  }
}

function Home() {
   const [editData , setEditData] = useState(null);
   const [state, dispatch] = useReducer(reducer, { count: 0 })

   const handleEdit = (data)=>{
    console.log(data);
    setEditData(data);
   }
  return (
    <div>
      <div className="m-3 px-10 py-10 border  rounded-xl border-gray-200 h-fit">
        <span className='text-5xl border py-2 px-5 rounded-xl border-gray-200 '>{state.count}</span>
        <div className="flex gap-7 mt-10 flex-wrap">
          <button 
          className='border px-4 py-2 rounded border-gray-200  '
          onClick={() => dispatch({ type: "increment" })}>increment</button>
          <button 
          className='border px-4 py-2 rounded border-gray-200 '
          onClick={() => dispatch({ type: "decrement" })}>decrement</button>
          <button 
          className='border px-4 py-2 rounded border-gray-200 '
          onClick={() => dispatch({ type: "reset" })}>Reset</button>
          <button 
          className='border px-4 py-2 rounded border-gray-200 '
          onClick={() => dispatch({ type: "add5" })}>Add 5</button>
          <button 
          className='border px-4 py-2 rounded border-gray-200 '
          onClick={() => dispatch({ type: "sub5" })}>Sub 5</button>
        </div>
      </div>
      <NewForm editData={editData} setEditData={setEditData}/>
      <NoteList onEdit ={handleEdit}/>
    </div>
  )
}

export default Home