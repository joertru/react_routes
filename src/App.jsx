import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import 'simpledotcss'

const Home = () => <h1>Inicio</h1>
const About = () => <h2>About</h2>
const Menu = () => {

  const menus = [
    'HotDog',
    'Hot Potatoes',
    'Hamburger'
  ]

  return(
    <>
      <h1>Menu</h1>
      <ul>
        { menus.map( item => (
          <li key={item}>
            <Link to={`menu/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const Items = () => {

}

function App() {

  return (
    <div>
     <header>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
        </nav>
      </header>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menu' element={<Menu/>} />
      </Routes>
    </div>

  )
}

export default App
