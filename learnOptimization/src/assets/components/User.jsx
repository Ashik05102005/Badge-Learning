import React from 'react'

const User = React.memo(({name})=>{
    console.log("renderd");
    return (
        <div className='flex items-center gap-5 text-3xl'>
            <span>Last selected Count :</span>
            <h1 className='font-medium'>{name}</h1>
        </div>
    )
})
  
export default User