
import React from 'react'
import { FaChevronLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Topbar from '../Navigation/Topbar'
import './paymentdetails.scss'

const PaymentDetails = () => {
  return (
    <>
    <Topbar />
    <div className='topbar-border'></div>
    <div className='back-link'>
      <Link to='/order/summary/'>
        <FaChevronLeft /> Go back
      </Link>
    </div>
    <h2 className='payment-details-h2'>Payment Details</h2>
    <section className='payment-details-area'>
        <h2 className='payment-details-area-h2'>Card Details</h2>
        <div className='payment-details-area-flex'>
        <div className='payment-details-area-flex-form'>
          <div>
            <label htmlFor="name">Cardholder Name</label>
            <input type="text" name="name" placeholder='Agnes Ademola' />  
          </div>  
          <div>
            <label htmlFor="num">Card Number</label>
            <input type="number" name="name" placeholder='XXXX XXXX XXXX XXXX' />  
          </div> 
          <div className='payment-details-area-flex-form-inner'>
            <div>
                <label htmlFor="date">Expiry Date</label>
                <input type="date" placeholder='05/22'  />
            </div>
            <div>
                <label htmlFor="cvv">CVV</label>
                <input type="password" name="cvv" placeholder='xxx' />
            </div>
          </div>
        </div>
        <div className='payment-details-area-flex-pay'>
            <h2>Order Details</h2>
            <div>
                <h3>Subtotal</h3>
                <h4>N2,000</h4>
            </div>
            <div>
                <h3>Delivery Fee</h3>
                <h4>N500</h4>
            </div>
            <div>
                <h3>Service</h3>
                <h4>Free</h4>
            </div>
            <div>
                <h3>Total</h3>
                <h4>N2,500</h4>
            </div>
            <button className='button' style={{width: '100%'}}>Pay N2,500</button>
        </div>
        </div>
    </section>
    </>
  )
}

export default PaymentDetails