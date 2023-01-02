import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext,AuthContextProvider } from '../Context/AuthContext'
// import '../App.css'

export default function Nav() {
    const {auth}=useContext(AuthContext)
    const handleLogout=()=>{
       window.location.reload()
    }
  return (
    <div className='navContainer'>
      <Link to="/home">Home</Link>
      {!auth.token?(<Link to="/login">Login</Link>):(<></>)}
      {auth.token?(<button onClick={handleLogout}>Logout</button>):(<></>)}
    </div>
  )
}
