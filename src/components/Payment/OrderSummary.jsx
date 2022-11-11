
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Topbar from '../Navigation/Topbar'
import { data } from '../data/product'
import './ordersummary.scss'

const OrderSummary = () => {
    const Data = data.find((item)=> item.id === 1)
    const navigate = useNavigate()
  return (
    <>
    <Topbar />
    <div className='topbar-border'></div>
    <div className='back-link'>
      <Link to='/user/marketplace'>
        <FaChevronLeft /> Go back
      </Link>
    </div>
    <h2 className='order-h2'>Order Summary</h2>
    <section>
    <div>
       <div>
        <img src={Data.img} alt={Data.name} />
       </div>
       <div>
        <h2>{Data.name}</h2>
        <h2>{Data.price}</h2>
        </div> 
    </div>
    <div>Edit Order</div>
    </section>
    <h2 className='order-h2'>Delivery Address</h2>
    <section className='delivery'>
    <h2>
        <span className='user-name'>
        Agnes Ademola
        </span>
        <span className='address'>No. 2, New Bodija Estate, Ibadan</span>
    </h2>
    <div>Edit Address</div>
    </section>
    <button className='button delivery-btn' onClick={() => navigate('/order/payment/details/')}>Proceed to Payment</button>
    </>
  )
}

export default OrderSummary