import React from 'react'
import {Link} from 'react-router-dom'



function Navbar() {
  return (
    <div className='navbar'>
      <h1 className='navbar-title'>The Dojo Blog</h1>
      <div className='nav'>
       <h2><Link to='/'>Home</Link></h2> 
       <h2><Link to='/blog'>Napravi Blog</Link></h2> 
      </div>
   
     
    </div>
  )
}

export default Navbar
