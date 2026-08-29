import DisplayContent from "./Pages/DisplayContent"
import Home from "./Pages/Home"
import {Routes,BrowserRouter,Route} from "react-router-dom"


function App() {
  // const initialState = {count : 0}
  // const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/display/:id' element={<DisplayContent />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  )
}

export default App
