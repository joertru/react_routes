///import { useState } from 'react'
import { Route, Routes, Link, useParams } from 'react-router-dom'
import './App.css'
import 'simpledotcss'

const Home = () => <h1>Inicio</h1>
const About = () => <h2>About</h2>
const Menu = () => {

  const menus = [
    'Hot_Dog',
    'Hot_Potatoes',
    'Hamburger'
  ]

  return(
    <>
      <h1>Menu</h1>
      <ul>
        { menus.map( item => (
          <li key={item}>
            <Link to={`/menu/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

const Items = () => {
  const { name } = useParams()
  return (
    <>
      <h1>Mi menu</h1>
      { name }
    </>
  )
}

function App() {

  return (
    <div>
     <header>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/menus">Menu</Link></li>
        </nav>
      </header>
      <h1>Rutas</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/menus' element={<Menu/>} />
        <Route path='/menu/:name' element={<Items/>} />
      </Routes>
    </div>

  )
}

export default App
