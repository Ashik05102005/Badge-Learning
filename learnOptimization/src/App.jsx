import { useCallback, useState } from 'react'

import User from './assets/components/User'
import { Button } from './assets/components/Button'

function App() {
  const [count, setCount] = useState(0);
  const [lastCount , setLastCount] = useState(0)
  const clickHandler = useCallback(()=>{
    console.log("clicked")
  },[])
  return (

    <div className='w-full flex items-center min-h-screen justify-center '>
      <div className='flex flex-col gap-5 w-1/2 border p-5 rounded-xl shadow border-gray-200 '>
        <button 
        className='border w-fit py-2 px-4 rounded text-purple-700 text-2xl bg-purple-50'
        onClick={()=>setCount(prev=>prev+1)}>count : {count}</button>
        <User name={lastCount} />
        <div className='flex gap-2'>
          <button 
          className=' py-2 px-4 rounded  bg-white/20 backdrop-brightness-60  text-white'
          onClick={()=>setLastCount(count)}>Set Count</button>
          <Button click={clickHandler} />
        </div>
        
      </div>
    </div>
  )
}

export default App
