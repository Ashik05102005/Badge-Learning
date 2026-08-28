import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ProductList } from './components/ProductList';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";



const initialState = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Phone", price: 30000 },
  { id: 3, name: "Headphones", price: 5000 },
  { id: 4, name: "Keyboard", price: 3000 },
];
const initialForm = {
  name: "",
  price: ""
}


function App() {
  const [debounceSearch , setDebounceSearch] = useState('')
  const [showEye, setShowEye] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [isEdit, setIsEdit] = useState(false);
  const [search, setSearch] = useState('')
  const [expensive, setExpensive] = useState(false);
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState(initialState);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setDebounceSearch(search)
    },500)
    return ()=>{
      clearTimeout(timer)
    }
  },[search])


  const inputRef = useRef(null);

  const priceRef = useRef(null);

  const handleDelete = useCallback((id) => { setProducts(prev => prev.filter(product => product.id !== id)) }, [])

  const editHandler = useCallback(data => {
    setIsEdit(true);
    setFormData(data)
  }, [])

  const expesiveProducts = useMemo(() => {
    console.log("calculating");
    if (expensive) {
      return products.filter(product => product.price > 10000)
    }
    return products
  }, [products, expensive])
  const filteredProducts = debounceSearch.trim() === ""
    ? expesiveProducts
    : expesiveProducts.filter(product => {
      if (product.name.toLowerCase().includes(debounceSearch.toLowerCase())) {
        return true
      }
    })

  const clickHandler = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.name.trim() === "" || formData.price.toString().trim() === "") {
      alert("fill the coloumn");
      return
    }
    console.log(formData);
    if (isEdit) {
      console.log(formData);
      setProducts(prev => prev.map(item => item.id === formData.id ? formData : item));
      setIsEdit(false);
      setFormData(initialForm)
    }
    else {
      setProducts(prev => ([...prev, { ...formData, id: crypto.randomUUID() }]))
      setFormData(initialForm);
    }
  }

  return (
    <div>
      <header className='border p-3 flex justify-center border-gray-200 shadow text-3xl'>
        PRODUCT DASHBOARD
      </header>
      <main className='m-5 flex flex-col gap-3'>
        <div className='flex gap-4 '>
          {/* counter  */}
          <div className=' border w-fit p-5 border-gray-200 rounded-xl'>
            <h1 className='text-4xl font-semibold'>Count : {count}</h1>
            <div className='flex gap-3 mt-3'>
              <button
                className='border py-2 px-4 rounded  '
                onClick={() => setCount(prev => prev + 1)}>Increment</button>
              <button
                className='border py-2 px-4 rounded  '
                onClick={() => setCount(prev => prev - 1)}>Decrement</button>
              <button
                className='border py-2 px-4 rounded  '
                onClick={() => setCount(0)}>clear</button>
            </div>
            {/* form  */}
          </div>
          <div className='border w-full p-3 rounded-xl border-gray-200'>
            <form
              onSubmit={submitHandler}
              className='flex flex-col justify-around  gap-3 w-full h-full'>
              <input
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                value={formData.name}
                className='border py-1 px-4 border-gray-300 rounded'
                placeholder='name'></input>
              <div className='relative  w-full'>
                <input
                  ref={priceRef}
                  type={showEye ? "password" : "text"}
                  onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                  value={formData.price}
                  className='border py-1 px-4 border-gray-300 rounded w-full'
                  placeholder='price'></input>
                <div
                  onClick={() => setShowEye(prev => !prev)}
                  className="absolute top-0 right-0 h-full px-2 flex items-center cursor-pointer"
                >
                  {showEye ?<FaEye />: <FaRegEyeSlash />}
                </div>
              </div>
              <button
                className='border py-2 rounded bg-gray-950 text-gray-50'
              >submit</button>
            </form>
          </div>
        </div>
        {/* search  */}
        <div className='sm:flex gap-4'>
          <input
            ref={inputRef}
            onChange={(e) => setSearch(e.target.value)}
            className='border w-full px-4 py-2 rounded border-gray-300 '
            placeholder='search'
            type='text'></input>
          <button
            onClick={clickHandler}
            className='border sm:w-50 rounded text-gray-200 bg-gray-950 py-2 w-full mt-3 sm:mt-0'
          >click</button>
        </div>
        {/* products filter */}
        <div className='flex justify-between'>
          <span className='text-xl font-medium'>Products</span>
          <button
            className='border py-2 px-4 rounded w-40'
            onClick={() => setExpensive(prev => prev ? false : true)}
          >{expensive ? "All" : "Expensive Only"}</button>
        </div>
        {/* ProductList  */}
        <ProductList
          onDelete={handleDelete}
          products={filteredProducts}
          onEdit={editHandler}
        />
      </main>
    </div>
  )
}

export default App


