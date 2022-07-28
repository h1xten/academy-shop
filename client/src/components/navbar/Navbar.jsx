import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__content wrapper'>
            <div className='navbar__logo'> <NavLink to= '/'>Academy Shop</NavLink></div>
        </div>
    </nav>
  )
}

export default Navbar