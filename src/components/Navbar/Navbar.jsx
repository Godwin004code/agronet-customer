import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='agronet-navbar'>
        <div className='agronet-navbar-container'>
        <h2 className='agronet-navbar-container-logo'>

            <Link to='/'>
            Agro<span style={{color:"black"}}>net</span>
            </Link>
        </h2>
        <nav>
            <ul>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/how-it-works">How it works</Link>
                </li>
                <li>
                    <Link to="/faqs">FAQs</Link>
                </li>
            </ul>
        </nav>
        </div>
        <div>
            <button>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar