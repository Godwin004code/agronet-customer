
import React from 'react'
import Sidebar from '../Navigation/Sidebar'
import Topbar from '../Navigation/Topbar'
import './dashboard.scss'
import img from "../../Assets/undraw_successful_purchase_re_mpig (2) 1.png"
import {data} from '../data/product'
import { Link } from 'react-router-dom'

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
            <section className='recent-product'>
              <span className='recent-product-header'>Recent Uploads</span>
              <span className='recent-product-amount'>40 Produce</span>
              <div className='items'>
                {data.map((item) => {
                  return (
                    <div className='single-item' key={item.id}>
                      <Link to={`/user/marketplace/${item.id}`}>
                      <div className='single-item-img'>
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className='single-item-des'>
                        <div className='single-item-des-header'>
                          <h2 className='single-item-des-header-price'>{item.price}</h2>
                          <h2 className='single-item-des-header-location'>{item.location}</h2>
                        </div>
                        <h2 className='single-item-des-name'>{item.name}</h2>
                      </div>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </section>
        </main>
    </section>
    </>
  )
}
