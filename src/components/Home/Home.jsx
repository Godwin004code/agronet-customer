import React from 'react'
import './Home.scss'
// icons
import {HiUser} from "react-icons/hi"
import {AiFillQuestionCircle} from "react-icons/ai"
import {MdPostAdd} from "react-icons/md"
// images
import img from '../../Assets/undraw_business_deal_re_up4u 1.png'
import img1 from '../../Assets/Rectangle 14.png'
import img2 from '../../Assets/Vector (1).png'
import img3 from '../../Assets/Ornament 10.jpg'
import img4 from '../../Assets/Ornament 9.jpg'

import Accordion from './Accordion'

const Home = () => {
  return (
    <>
    <section className='agronet-home-hero'>
    <div className='agronet-home-hero-text'>
        
        <h2>We connect farmers and food producers with buyers</h2>
        <p>
            Agronet has made it easier for food producers to get customers and for consumers to get fresh and quality farm produce.
        </p>
        <button>Get Started</button>
    </div>
    <div>
    <img src={img3} alt="ornament" />
    </div>
    <div className='agronet-home-hero-img'>
        <img src={img} alt="get started" />
    </div>
    </section>
    <section className='agronet-home-namer'>
        <h2>We've built an easy-to-use marketplace.</h2>
    </section>
    <section className='agronet-about'>
        <div className='agronet-about-text'>
            <h2>About Us</h2>
            <p>
                The ineffective interconnection among members of the agricultural market has caused losses, scarcity, food insecurity, debts and has hindered progress.
            </p>
            <p>
                Agronet is a digital solution many have been expexting and is improving conventional marketing and sales processes as our web app will do the mapping and connection from needy to provider.
            </p>
            <button>
                Get Started
            </button>
        </div>
        <div>
    <img src={img4} alt="ornament" />
    </div>
        <div className='agronet-about-img'>
            <img src={img1} alt="about us" />
        </div>
    </section>
    <section className='agronet-steps'>
        <div className='agronet-steps-work'>
            <h2>How it works</h2>
            <p>
                Let's guide you to use Agronet effectively
            </p>
        </div>
        <div className='agronet-steps-des'>
            <section className='agronet-flex-1'>
                <div>
                    <h2><HiUser/> </h2>
                    <h3>Create an account</h3>
                    <p>
                    Click on Get Started, than register with your phone number or email address. You will be redirected to your dashboard where you will complete your profile registration and verification for business owners.
                    </p>
                </div>
                <div>
                    <h2><MdPostAdd /> </h2>
                    <h3>Post farm produce</h3>
                    <p>
                    For farmers and food producers, you can post what you have for sale. You will also be notified when a request is made for a produce in your niche and you can view all buyers requests.
                    </p>
                </div>
            </section>
            <section className='agronet-flex-1'>
                <div>
                    <h2><AiFillQuestionCircle /> </h2>
                    <h3>Make a request</h3>
                    <p>
                    You can make a request of what you want or view available produce. After making request, matches will be made by our system and you will ne notified when it is successful. You can also track your request.
                    </p>
                </div>
                <div>
                    <img src={img2} alt='get paid' />
                    <h3>Pay, Get delivery.</h3>
                    <p>
                    When a successful match is made or when you order from marketplace, you will pay to confirm order, fill in your delivery location and it will be delivered to you.
                    </p>
                </div>
            </section>
        </div>
    </section>
    <section className='agronet-accordion'>
        <Accordion />
    </section>
    </>
  )
}

export default Home