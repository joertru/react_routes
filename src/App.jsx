import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

const Home = () => <h1>Inicio</h1>
const About = () => <h2>About</h2>

function App() {

  return (
    <div>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>

  )
}

export default App
