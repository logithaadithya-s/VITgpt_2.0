import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "../pages/Home"
import { NavLink } from 'react-router-dom'
import Navbar from '../pages/components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar subjects={[{id:1,SubjectName:"hello"}]}/>
    </>
  )
}

export default App
