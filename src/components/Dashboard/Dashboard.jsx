
import React from 'react'
import Sidebar from '../Navigation/Sidebar'
import Topbar from '../Navigation/Topbar'
import './dashboard.scss'
import img from "../../Assets/undraw_successful_purchase_re_mpig (2) 1.png"

export default function Dashboard() {
  return (
    <>
    <Topbar />
    <section className='agronet-dashboard-flex'>
        <Sidebar />
        <main className='agronet-dashboard-area'>
            <section className="hero">
                <div className='hero-text'>
                <h2>Buy and sell farm produce</h2>
                <p>View farm produce or add yours, make a request or view requests.</p>
                <button className='submit-button'>Submit Request</button>
                <button className='upload-button'>Upload Produce</button>
                </div>
                <div className='hero-img'>
                  <img src={img} alt="Hero" />
                </div>
            </section>
        </main>
    </section>
    </>
  )
}
