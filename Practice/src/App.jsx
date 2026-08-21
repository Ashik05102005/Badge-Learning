import { useState } from 'react'
import { ProductList } from './components/ProductList';

const initialState = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Headphones", price: 5000 },
  { id: 4, name: "Keyboard", price: 3000 },
];

function App() {
  const [count, setCount] = useState(0)
  const [products,setProducts] = useState(initialState)


  return (
   <div>
      <header className='border p-3 flex justify-center border-gray-200 shadow text-3xl'>
        PRODUCT DASHBOARD
      </header>
      <main className='m-5 flex flex-col gap-3'>
        {/* counter  */}
        <div className=' border w-fit p-5 border-gray-200 rounded-xl'>
          <h1 className='text-4xl font-semibold'>Count : {count}</h1>
          <div className='flex gap-3 mt-3'>
            <button 
            className='border py-2 px-4 rounded  '
            onClick={()=>setCount(prev=>prev+1)}>Increment</button>
            <button 
            className='border py-2 px-4 rounded  '
            onClick={()=>setCount(prev=>prev-1)}>Decrement</button>
            <button 
            className='border py-2 px-4 rounded  '
            onClick={()=>setCount(0)}>clear</button>
          </div>
        </div>
        {/* search  */}
        <div>
          <input
          className='border w-full px-4 py-2 rounded border-gray-300 '
          placeholder='search'
          type='text'></input>
        </div>
        {/* products filter */}
        <div className='text-xl font-medium'>
          Products
        </div>
        {/* ProductList  */}
        <ProductList products={products}/>
      </main>
   </div>
  )
}

export default App
