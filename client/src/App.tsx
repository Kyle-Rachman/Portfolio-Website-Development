import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App