import React from 'react';
import './Offers.css'
import exlusive_img from '../assets/jordan11.png';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLER PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exlusive_img} alt="" />
        </div>
    </div>
  )
}

export default Offers;