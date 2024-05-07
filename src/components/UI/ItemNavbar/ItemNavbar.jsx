import React from 'react'
import './ItemNavbar.css'

export const ItemNavbar = ({ imageSrc, link }) => {
  return (
    <li className="nav-item">
    <a href={link} className="nav-link">
      <img src={imageSrc} alt="Navbar Item" />
    </a>
  </li>
);  
}
