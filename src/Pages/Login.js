import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {loginToEcom} from '../Actions/ecom.actions'
import { connect } from "react-redux";

export function Login() {
    const [mail, setMail]= useState('')
    const [pwd, setPwd]= useState('')

    const subAction=(e)=>{
        e.preventDefault()
        axios
            .post("https://reqres.in/api/login",{email:mail,password:pwd})
            .then((e, {dispatch}) => dispatch(loginToEcom(e.data.token))).catch (err => console.log("Error",e))
    }
  return (
    <div>
        <form onSubmit={subAction}>
            <input type="email" placeholder="Enter email ID" onChange={(e)=>setMail(e.target.value)} />
            <input type="password" placeholder="Enter Password" onChange={(e)=>setPwd(e.target.value)} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default connect()(Login);