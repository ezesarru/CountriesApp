//? Styles
import './App.css'

//? Libraries
import axios from 'axios'

//? Hooks
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

//? Components
import Cards from './components/Cards/Cards'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'

//? Utilities

const App = () => {

  return(
    <div>
      <h1>Hola Mundo!</h1>
    </div>
  )
}

export default App
