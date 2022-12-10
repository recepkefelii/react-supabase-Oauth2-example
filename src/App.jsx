import React from 'react'
import Input from './components/Input'
import { Routes,Route,Link,NavLink } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'


function App() {

  return (
    <>
      <Routes>
        <Route path='/auth/login' element={<Login/>} />
        <Route path='/auth/register' element={<Register/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
