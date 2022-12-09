import React from 'react'
import Input from './components/Input'
import { Routes,Route,Link,NavLink } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'


function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
