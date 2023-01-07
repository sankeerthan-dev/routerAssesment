import React, {useContext} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



export function Nav() {
    // const {auth}=useContext(AuthContext)
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

export default connect()(Nav)