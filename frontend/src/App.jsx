import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from './components/Calendar'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Forms/Login'
import SignUp from './Forms/SignUp'
import MyCalendar from './components/MyCalendar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Routes>
     <Route path="/" element = {<MyCalendar/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     </Routes>
    </BrowserRouter>

    
    </>
  )
}

export default App
