import React from 'react'
import { NavLink} from 'react-router-dom'
import '../index.css'

function Navbar() {
  return (
    <div>
        <div className="Navbar-container">
            <div className="logo">
               <NavLink to="/" > <img src="./logo192.png" alt="logo" className='logo-image' /></NavLink>
            </div>
            <div className="menu">
                <ul className='menu-list'>
                    <li>
                        <NavLink to='/' className="menu-items">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className="menu-items">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/service' className="menu-items">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className="menu-items">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to='/gallery' className="menu-items">Gallery</NavLink>
                    </li>
                </ul>
            </div>
            <div className="item">
                <ul className='menu-items-list'>
                    <li>
                        <NavLink to='/contact' className=" btn">Hire Me</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar