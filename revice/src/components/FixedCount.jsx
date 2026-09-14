import React from 'react'

export const FixedCount = React.memo(({num,check}) => {
    console.log("component re renders")
  return (
    <div>
        {num}
        <div>
            <button onClick={check}>check</button>
        </div>
    </div>
  )
}
)