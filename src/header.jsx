import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Header() {

  return (
    <div className='head'>
        <nav className='details'>
       <NavLink to='/' style={({isActive})=>({color: isActive ? 'red' : 'white'})}>Home</NavLink>
       <NavLink to='/about' style={({isActive})=>({color: isActive ? 'red' : 'white'})}>About</NavLink>
       <NavLink to='/contact' style={({isActive})=>({color: isActive ? 'red' : 'white'})}>Contact Us</NavLink>
        </nav>
        <div className='buttons'>
          <Link to='/signup'><h4 className='btn'>Sign Up</h4></Link>  
          <Link to='/login'><h4 className='btn'>Log In</h4></Link> 
        </div>
    </div>
  )
}

export default Header;