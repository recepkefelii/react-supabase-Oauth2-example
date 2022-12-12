import React from 'react'
import '../global.css'
import { Link,NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <div style={{ width: "100%"}}>
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
      Social-Media
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
    </label>
  </div>
  
  <div class="nav-links">
    <NavLink to={"/auth/login"}>
        Sign in
    </NavLink>
    <NavLink to={"/auth/register"}>
        Signup
    </NavLink>
    <NavLink to={"/"}>
      Home
    </NavLink>
  </div>
</div>
   </div>
  )
}
