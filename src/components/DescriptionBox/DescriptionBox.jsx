import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Your premier basketball e-commerce page combines passion for the game with high-quality gear. 
                Whether you're a seasoned pro or just starting, our curated selection of basketball shoes, apparel, and accessories is designed to elevate your performance. 
                Explore top brands and the latest innovations in sportswear, ensuring you have everything you need to play your best. With an easy-to-navigate interface, fast shipping, and excellent customer service, your one-stop basketball shop is dedicated to helping you achieve your hoop dreams with style and confidence.
            </p>
            <p>
            An e-commerce website offering a curated selection of high-quality products, streamlined for easy shopping, fast shipping, and exceptional customer service.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox