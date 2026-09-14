import { useCallback, useMemo, useState } from 'react'
import { DisplayNames } from './DisplayNames';
import { NamesList } from './NamesList';



function App() {
  const [count, setCount] = useState(0);
  const names = useMemo(()=>["ashik", "karthik", "vyshakh", "mansoor","fayas","shamil"],[]);
  const [name,setName] = useState("no name")

  const handleNames = useCallback((data)=>{
    setName(data)
  },[name])
  // console.log("app rendered")
  return (
    <div>
      <div className="m-5 border  w-fit p-5 rounded-xl border-gray-200">
        <div>
          <p className='text-5xl'>{count}</p>
        </div>
        <div className='flex gap-5 mt-4'>
          <button
            className='border py-2 px-4 rounded '
            onClick={() => setCount(count => count + 1)}
          >Increment</button>
          <button
             className='border py-2 px-4 rounded '
            onClick={() => setCount(count => count - 1)}
          >Decrement</button>
          <button
             className='border py-2 px-4 rounded '
            onClick={() => setCount(0)}
          >Clear</button>
        </div>
      </div>
      <div className='border border-gray-200 m-5 py-3 rounded-xl w-fit'>
        {/* <span className='m-5 text-4xl'>{name.toUpperCase()}</span> */}
        <DisplayNames names={names} handleNames={handleNames}/>
      </div>
      <div>
        <NamesList names={names}/>
      </div>
    </div>
  )
}

export default App
