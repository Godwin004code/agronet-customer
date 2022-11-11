import React from 'react'
import Topbar from '../Navigation/Topbar'
import './singleproduct.scss'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'
import {data} from '../data/product.js'

const SingleProduct = () => {
  const params = useParams()
  const navigate = useNavigate()
  const slug = params.slug
  
  const singleData = data.find((item) => item.id === Number(slug))


  return (
    <>
    <Topbar />
    <div className='topbar-border'></div>
    <div className='back-link'>
      <Link to='/user/marketplace'>
        <FaChevronLeft /> Go back
      </Link>
    </div>
    <section className='product-flex'>
      <div className='product-flex-img'>
        <div>
          <img src={singleData.img} alt={singleData.name} />
        </div>
        <div>
          images
        </div>
      </div>
      <div className='product-flex-text'>
        <h2>Keisey store</h2>
        <h2>{singleData.location}</h2>
        <h2>{singleData.name}</h2>
        <h2>{singleData.price}</h2>
        <h2>Delivery fee <span>N500</span></h2>
        <p>{singleData.des}</p>
        <ul>
          <li> <span></span> No refund after 24 hours</li>
          <li> <span></span> Delivery is impossible outside Ibadan</li>
          <li> <span></span> Delivery within Ibadan takes maximum of 24 hours</li>
        </ul>
        <section className='product-flex-text-opt'>
        <div>
          <h3>type</h3>
        <select>
          <option value="white">White</option>
          <option value="red">Red</option>
        </select>
        </div>
        <div>
          <h3>quantity</h3>
          <input type="number" name="" placeholder="1" />
        </div>
      </section>
      <section>
        <h3>delivery choice</h3>
        <select>
          <option value="white">Deliver to me (Fee: N500)</option>
        </select>
      </section>
      <section className='product-flex-text-btns'>
        <button onClick={() => navigate('/order/summary')}>Buy Now</button>
        <button>Add to Cart</button>
      </section>
      </div>
    </section>
    </>
  )
}

export default SingleProduct