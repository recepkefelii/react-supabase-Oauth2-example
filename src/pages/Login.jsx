import React from 'react'
import Input from '../components/Input'
import  '../global.css'
import Backgorund from '../components/Backgorund'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import Main from '../styles/main-component-style'
import Bar from '../styles/bar-component-style'

export default function Login() {
  return (
    <Bar>
        <Navbar/>
      <Main>
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
      </Main>
    </Bar>
  )
}
