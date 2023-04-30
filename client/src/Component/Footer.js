import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <>
   <div className="footer-container">
    <div className="menu1">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
      </ul>
    </div>
    <div className="menu1">
      <ul>
        <li>
        <box-icon type='logo' name='linkedin-square' color='white' size='md'></box-icon>
          <Link to="/">Linkedin</Link>
          </li>
        <li>
        <box-icon name='github' type='logo' color='white' size='md' ></box-icon>
          <Link to="/">Github</Link>
          </li>
        <li>
        <box-icon name='youtube' type='logo'  color='white' size='md'></box-icon>
          <Link to="/">Youtube</Link>
          </li>
        <li>
        <box-icon name='instagram-alt' type='logo' color='white' size='md' ></box-icon>
          <Link to="/">Instagram</Link>
          </li>
        <li>
        <box-icon name='facebook-circle' type='logo'  color='white' size='md'></box-icon>
          <Link to="/">Facebook</Link>
          </li>
      </ul>
    </div>
    <div className="contact-box">
      <ul>
       <li>
       <box-icon name='user' className='icon' color='white' size='sm' ></box-icon> 
        <p>Vishal Kumar</p>
        </li>
       <li>
       <box-icon name='envelope' className='icon' color='white' size='sm'></box-icon>
        <p>5060Vishalkumar@gmail.com</p>
        </li>
       <li>
       <box-icon name='phone' type='solid' className='icon' color='white' size='sm'
        ></box-icon>
        <p>+91 8517014691</p>
        </li>
      </ul>
    </div>
   </div>
   </>
  )
}

export default Footer