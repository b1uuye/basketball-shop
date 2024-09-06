import React, { useContext, useRef } from 'react';
import logo from '../assets/logo.png';
import cart_icon from '../assets/shopping-cart.png';
import nav_dropdown from '../assets/drop-chevron.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { ShopContext } from '../../Context/ShopContext';


const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open') //whenever we click the dropdown it will open/close
    }

    return(
        <div className='nav'>
            <div className='nav-logo'>
            <img src={logo} alt="logo" href="/" />
            <p>BasketShop</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() =>(setMenu("shop"))}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu === "shop"?<hr/>:<></>}</li> {/*uses states to choose which area should be highlighted on the click*/}
                <li onClick={() =>(setMenu("shoes"))}><Link style={{textDecoration: 'none'}} to='/shoes'>Shoes</Link>{menu === "shoes"?<hr/>:<></>}</li>
                <li onClick={() =>(setMenu("accessories"))}><Link style={{textDecoration: 'none'}} to='/accessories'>Accessories</Link>{menu === "accessories"?<hr/>:<></>}</li>
                <li onClick={() =>(setMenu("basketballs"))}><Link style={{textDecoration: 'none'}} to='/basketballs'>Basketballs</Link>{menu === "basketballs"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="/" /></Link>    
                <div className="nav-cart-count">{getTotalCartItems(/*will change depending on what is added to cart*/)}</div> 
            </div>
        </div>
    );

};

export default Navbar;