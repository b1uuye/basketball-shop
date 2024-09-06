import React, { createContext, useState } from 'react'
import all_product from '../components/assets/all_product';


export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => { //This block of code will handle what loads on each page for shoes, accessories and basketballs

    const [cartItems, setCartItems] = useState(getDefaultCart());
    
    const addToCart = (itemId) => { //adding item to cart
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }

    const removeFromCart = (itemId) => { //removing item from cart
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () =>{ //for loop for calculating all products together
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }return totalAmount
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {all_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider