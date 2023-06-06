import { useState } from 'react'
import './App.css'

const home = () => <h1>Inicio</h1>
const about = () => <h2>About</h2>

function App() {

  return (
    <>
      <div>
         <img src={viteLogo} className="logo" alt="Vite logo" />
         <h1>Rutas</h1>
      </div>
    </>
  )
}

export default App
