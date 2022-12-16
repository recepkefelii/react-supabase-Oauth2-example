import Navbar from '../components/Navbar'
import CardCompoenent from '../components/Card'
import React,{useEffect} from 'react'
import  { supabase }  from '../supabase/SupabaseClient'
import { useSelector, useDispatch } from 'react-redux'
import { GithubLogin } from '../store/authSlice'
export default function Home() {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.authReducer)
  

   useEffect(() => {
    supabase.auth.getUser().then(value => {
      if (value) {
        dispatch(GithubLogin({user: value.data.user})) 
      }
    })
   },[])
   console.log(user);
  
  

  if(user.email){
    return (
      <div>
        <Navbar/>
        <CardCompoenent/>
      </div>
    )
  }
  if (!user.email) {
    return (
      <div>
      <Navbar/>
      <CardCompoenent/>
    </div>
    )
  }
  else{
    return (
      <div>
        error
      </div>
    )
  }
}
