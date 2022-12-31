import React from 'react'
import { Link } from 'react-router-dom'
// import '../App.css'

export default function Nav() {
  return (
    <div className='navContainer'>
      <Link to="/home">Home</Link>
      <Link to="/products/:id">Products</Link>
      <Link to="/login">Login</Link>
      {/* <Link */}
    </div>
  )
}
