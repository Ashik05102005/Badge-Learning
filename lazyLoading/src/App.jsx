import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Pages/Home'
// import Books from './Pages/Books'
// import BookDetails from './Pages/BookDetails'
// import Cart from './Pages/Cart'
// import About from './Pages/AboutA'

const Home = lazy(() => import('./Pages/Home'))
const Books = lazy(() => import('./Pages/Books'))
const BookDetails = lazy(() => import('./Pages/BookDetails'))
const Cart = lazy(() => import('./Pages/Cart'))
const About = lazy(() => import('./Pages/About'));
const Checkout = lazy(()=>import('./Pages/Checkout'))


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter >
        <Suspense fallback={
                    <div className="min-h-screen flex items-center justify-center">
                        <h1 className="text-2xl font-semibold">
                            Loading...
                        </h1>
                    </div>
                }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/books/:id' element={<BookDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
