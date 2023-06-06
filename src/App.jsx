import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import 'simpledotcss'

const Home = () => <h1>Inicio</h1>
const About = () => <h2>About</h2>

function App() {

  return (
    <div>
     <header>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
        </nav>
      </header>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>

  )
}

export default App
