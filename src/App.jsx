import { useState } from 'react'
import { Route } from 'react-router-dom'
import './App.css'

const Home = () => <h1>Inicio</h1>
const About = () => <h2>About</h2>

function App() {

  return (
    <div>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
    </div>

  )
}

export default App
