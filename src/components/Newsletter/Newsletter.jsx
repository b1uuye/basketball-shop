import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive offers to your Email</h1>
        <p>Subscribe to our newsletter and stay up to date!</p>
        <div>
            <input type="email" placeholder='Your Email Address' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter;