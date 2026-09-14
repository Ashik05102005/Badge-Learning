import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Product'
// import { ProductsList } from './components/ProductsList'
const ProductsList = lazy(() => import('./components/ProductsList'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading..</h1>}>
          <Routes>
            <Route path='/' element={<ProductsList />} />
            <Route path='/:id' element={<Product />} />
          </Routes>
        </Suspense>
      </BrowserRouter>

    </>
  )
}

export default App
