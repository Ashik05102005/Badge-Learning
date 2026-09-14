import { useCallback, useState } from 'react'
import { FixedCount } from './components/FixedCount';

function App() {
  const [count, setCount] = useState(0);
  const [num,setNum ]= useState(0)
  console.log("app rendered")
  const check = useCallback(()=>{
    console.log("function exicutes")
  },[])

  return (
    <>
      <div className='border p-3 m-5 '>
        <div>{count}</div>
        <div className='mt-3 flex gap-5'>
          <button onClick={() => setCount(prev => prev + 1)}>incr</button>
          <button onClick={() => setCount(prev => prev - 1)}>decr</button>
          <button onClick={() => setCount(0)}>clear</button>
        </div>
      </div>
      <div>
        <FixedCount num={num} check ={check} />
        <button onClick={()=>setNum(count)}>set count as number</button>
      </div>
    </>
  )
}

export default App
