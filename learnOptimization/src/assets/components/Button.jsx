import React from 'react'

export const Button = React.memo( ({click}) => {
    console.log("Button rendered")
    return (
    <div >
        <button
        className=' py-2 px-4 rounded  bg-white/20 backdrop-brightness-60  text-white'
        onClick={click}>click</button>
    </div>
  )
})
