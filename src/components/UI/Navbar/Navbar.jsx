import React from 'react'
import './Navbar.css'

export const Navbar = ({children}) => {
  return (
    <nav className="navbar">
    <ul className="navbar-nav">
        {children}
    </ul>
  </nav>
);  
}
