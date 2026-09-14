import React, { useState } from 'react'

export const DisplayNames = React.memo(({names , handleNames}) => {
    const [currentName,setCurrentName]= useState(names[0])
    // console.log("render Display Names ");
    // console.log(names);
  return (
    <div className='m-5  flex  flex-col gap-5 w-full'>
        <span className='text-5xl'>{currentName.toUpperCase()}</span>
        <div className='flex mt-2 gap-5'>
            <button 
            className='border px-4 py-2 rounded disabled:text-gray-300'
            disabled={names.indexOf(currentName)===0}
            onClick={()=>setCurrentName(prev=>(names[names.indexOf(prev)-1]))}>Prev</button>
            <button
            disabled={names.indexOf(currentName)===names.length-1} 
            className='border px-4 py-2 rounded disabled:text-gray-300'
            onClick={()=>setCurrentName(prev=>(names[names.indexOf(prev)+1]))}>Next</button>
        </div>
        
    </div>
  )
})
