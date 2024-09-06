import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../assets/next.png'

const Breadcrum = (props) => { // what is shown above when you click a product to view more
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow_icon} alt="" /> 
        SHOP <img src={arrow_icon} alt="" /> 
        {product.category} <img src={arrow_icon} alt="" /> 
        {product.name}
    </div>
  )
}

export default Breadcrum