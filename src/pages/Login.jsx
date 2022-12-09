import React from 'react'
import Input from '../components/Input'
import  '../global.css'
import Backgorund from '../components/Backgorund'
import Button from '../components/Button'
import '../styles/login.css'

export default function Login() {
  return (
    <div className='input'>
        <Backgorund>
            <span style={{fontSize: 40, marginBottom: 15, fontWeight: 500,color: "#222"}}>Sign in</span>
            <div>
               <label style={{fontSize:16, color:"#888"}}>Email</label>
                <Input defaultValue="" placeholder='example@hotmail.com'/>
            </div>
            <div>
                <label style={{fontSize:16, color:"#888"}}>Password</label>
                <Input defaultValue="" placeholder='**********'/>
            </div>
            <Button>Sign in</Button>
        </Backgorund>
    </div>
  )
}
