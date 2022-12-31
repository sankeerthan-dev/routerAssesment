import React, { useContext } from 'react'
import '../App.css'
import { AuthContext } from '../Context/AuthContext'
import {useState} from 'react'
import axios from 'axios'
export default function Login() {
    const [mail, setMail]= useState('')
    const [pwd, setPwd]= useState('')
    const {loginUser} = useContext(AuthContext)
    // console.log(loginUser);
    const subAction=(e)=>{
        e.preventDefault()
        axios
            .post("https://reqres.in/api/login",{email:mail,password:pwd})
            .then(e => loginUser(e.data.token)).catch (err => console.log("Error",e))
    }
  return (
    <div>
        <form className='formDesign' onSubmit={subAction}>
            <input type="text" placeholder='Enter user name' onChange={(e)=>setMail(e.target.value)}/>
            <input type="password" placeholder='Enter Password' onChange={(e)=>setPwd(e.target.value)}/>
            <input type="submit" />
        </form>
    </div>
  )
}
