import React from 'react'
import {Link} from "react-router-dom"
import {FaInstagramSquare, FaFacebookSquare, FaLinkedin} from "react-icons/fa"
import './Footer.scss'

const Footer = () => {
  return (
    <section className='footer-container'>
        <h2 className='footer-logo'>
                <Link to="/">
                    <span style={{color: '#CAEA69'}}>Agro</span>net
                </Link>
            </h2>
        <div className='footer-links-container'>
            <div className='footer-about-us'>
                <p>
                We make sales and purchase; easier and faster.
                </p>
                <div>
                   
                        <FaInstagramSquare />
                        
                    <FaFacebookSquare />
                    <FaLinkedin />
                </div>
            </div>
            <div className='footer-flex'>
                <div className='footer-nav-links'>
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
                <li>
                    <Link to="/faqs">Get Started</Link>
                </li>
            </ul>
                </div>
                <div className='footer-contacts'>
                    <div>
                        <h3>Phone Number</h3>
                        <h2>+23480 1234 5678</h2>
                        
                    </div>
                    <div>
                    <h3>Email Address</h3>
                        <h2>Contact@agronet.com</h2>
                    </div>
                </div>
            </div>
        </div>
        <h2 className='footer-copyright'>
                2022 Agronet. All Rights Reserved
            </h2>
    </section>
  )
}

export default Footer