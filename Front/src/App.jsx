//? Styles
import './App.css'

//? Libraries
import axios from 'axios'

//? Hooks
import { useState, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'

//? Components
import Home from './components/Home/Home'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/NavBar'

//? Utilities

const App = () => {

  const { pathname } = useLocation()

  return(
    <div>

      {
        (
          pathname === '/home' ||
          pathname === '/createActivity'
        ) && <NavBar />
      }

      <Routes>
        <Route path='/' element={ <LandingPage /> }/>
        <Route path='/home' element={ <Home /> }/>
        <Route path='/countries/:id' element={<Detail />}/>
        <Route path='/createActivity' element={ <Form /> }/>
      </Routes>

    </div>
  )
}

export default App
