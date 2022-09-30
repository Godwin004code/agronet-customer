import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
    const navigate = useNavigate()

    const navigateToGetStarted = () => {
        navigate('/get-started')
    }
  return (
    <section className='agronet-navbar'>
        <div className='agronet-navbar-container'>
        <h2 className='agronet-navbar-container-logo'>

            <Link to='/'>
            Agro<span style={{color:"black"}}>net</span>
            </Link>
        </h2>
        <nav>
            <ul>
                
                <li>
                    <Link to="#about">About Us</Link>
                </li>
                <li>
                    <Link to="#steps">How it works</Link>
                </li>
                <li>
                    <Link to="#faqs">FAQs</Link>
                </li>
            </ul>
        </nav>
        </div>
        <div>
            <button onClick={navigateToGetStarted}>Get Started</button>
        </div>
    </section>
  )
}

export default Navbar