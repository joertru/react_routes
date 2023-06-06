import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
