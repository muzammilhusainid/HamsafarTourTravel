import './App.css'
import { BrowserRouter, Routes, Route } from "react-router"

import Hero from './components/hero/Hero'
import Home from './components/home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
