import React,{useEffect,useState} from 'react'
import Input from '../components/Input'
import  '../global.css'
import Backgorund from '../components/Backgorund'
import Navbar from '../components/Navbar'
import Main from '../styles/main-component-style'
import Bar from '../styles/bar-component-style'
import  { supabase }  from '../supabase/SupabaseClient'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import '../global.css'


export default function Login() {

  const login = async (provider) => {
    await supabase.auth.signInWithOAuth({provider: provider,
      redirectTo: 'http://localhost:3000/'
    })
  }
  
  if (!localStorage.getItem('sb-iljjyaxfycermifsypsy-auth-token')) {
    return (
      <Bar>
    <Navbar/>
  <Main>
    <Backgorund>
    <span style={{fontSize: 40, marginBottom: 15, fontWeight: 500,color: "#222"}}>Login</span>
      <Input onClick={() => login('google')}>
        <FcGoogle style={{marginRight: "auto"}} size={30} color="white" />
        <span style={{flex: 1}}>Sign in with Google</span>
      </Input>
      <Input onClick={() => login('github')}>
        <AiOutlineGithub style={{marginRight: "auto"}} size={30}/>
        <span style={{flex: 1}}>Sign in with Github</span>
      </Input>
      <Input onClick={() => login('discord')}>
        <FaDiscord style={{marginRight: "auto"}} size={30} color="#5562EA"/>
        <span style={{flex: 1}}>Sign in with Discord</span>
      </Input>
    </Backgorund>
  </Main>
</Bar>
    )
  }
  if(localStorage.getItem('sb-iljjyaxfycermifsypsy-auth-token')){
    <div>
      {window.location.href = "/"}
      
    </div>
  }
    
  }
