import { useState } from 'react'
import Header from './components/Header'
import Form from './components/Form'
import DisplayList from './components/DisplayList'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header />
    <Form />
    <DisplayList />
   </>
  )
}

export default App
