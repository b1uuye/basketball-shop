import React from 'react';
import './Footer.css';
import footer_logo from '../assets/logo.png';
import instagram_icon from '../assets/instagram.png';
import whatsapp_icon from '../assets/whatsapp.png';
import email_icon from '../assets/email.png';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=""/>
            <p>BasketShop</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-socials-icon">
            <div className="footer-icons-container">
                <img src={email_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved</p> 
        </div>
    </div>
  )
}

export default Footer;