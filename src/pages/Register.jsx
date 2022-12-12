import '../styles/register.css'
import React from 'react'
import Input from '../components/Input'
import  '../global.css'
import Backgorund from '../components/Backgorund'
import Button from '../components/Button'
import Navbar from '../components/Navbar'

function Register() {
  return (
    <div className='register'>
    <Navbar/>
  <div className='main'>
    <Backgorund>
        <span style={{fontSize: 40, marginBottom: 15, fontWeight: 500,color: "#222"}}>Signup</span>
        <div>
           <label style={{fontSize:16, color:"#888"}}>Email</label>
            <Input defaultValue="" placeholder='example@hotmail.com'/>
        </div>
        <div>
           <label style={{fontSize:16, color:"#888"}}>Username</label>
            <Input defaultValue="" placeholder='john'/>
        </div>
        <div>
           <label style={{fontSize:16, color:"#888"}}>Password</label>
            <Input defaultValue="" placeholder='**********'/>
        </div>
        <div>
            <label style={{fontSize:16, color:"#888"}}>Confirm Password</label>
            <Input defaultValue="" placeholder='**********'/>
        </div>
        <Button>Signup</Button>
    </Backgorund>
    </div>
</div>
  )
}

export default Register