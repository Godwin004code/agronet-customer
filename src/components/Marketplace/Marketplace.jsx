
import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../data/product'
import Sidebar from '../Navigation/Sidebar'
import Topbar from '../Navigation/Topbar'
import './marketplace.scss'

const Marketplace = () => {
  return (
    <>
    <Topbar />
    <section className='agronet-dashboard-flex'>
        <Sidebar />
        <main className='agronet-dashboard-area'>
          <section className='agronet-dashboard-area-header'>
            <h2>Farm Produce</h2>
            <button>Upload Produce</button>
          </section>
          <section className='recent-product'>
              <select>
                <option value="ibadan">Ibadan</option>
                <option value="lagos">Lagos</option>
              </select>
              <select>
              <option value="ibadan">All Category</option>
                <option value="lagos">Corn</option>
              </select>
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

export default Marketplace