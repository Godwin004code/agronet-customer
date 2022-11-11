
import React from 'react'
import Topbar from '../Navigation/Topbar'
import { FaChevronLeft } from 'react-icons/fa'


const PaymentSuccessful = () => {
  return (
    <>
    <Topbar />
    <div className='topbar-border'></div>
    <h2>We're on it</h2>
    <p>
    Your payment has been received and you will get notifications for your order’s state.
    </p>
    <button> <FaChevronLeft /> Go Back to Home</button>
    </>
  )
}

export default PaymentSuccessful