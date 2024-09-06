import React from 'react';
import './App.css';
import Navbar from './components/Navbar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import shoe_banner from './components/assets/shoebanner.png';
import accessory_banner from './components/assets/accessorybanner.png';
import basketball_banner from './components/assets/basketballbanner.png'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Shop/>}/>
        <Route path='/shoes' element= {<ShopCategory banner={shoe_banner} category="shoes"/>}/>
        <Route path='/accessories' element= {<ShopCategory banner={accessory_banner} category="accessory"/>}/>
        <Route path='/basketballs' element= {<ShopCategory banner={basketball_banner} category="basketball"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
