import React,{createContext, useState} from "react";
import all_product from "../Components/Assets/all_product";
import Product from "../Pages/Product";

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for(let i = 0; i < all_product.length+1 ;i++){
        cart[i] = 0;
    } 
    return cart;
}
const ShopContextProvider=(props) =>{
    let [cartItem,setCartItems] = useState(getDefaultCart());

    console.log(cartItem)
    let addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        // console.log(cartItem);
    }

    let getTotalcartAmout = () =>{
        let totalAmount = 0;
        for(let item in cartItem)
        {
            if(cartItem[item] > 0)
                {
                    let iteminfo = all_product.find((product)=>product.id === Number(item))
                    totalAmount += iteminfo.new_price * cartItem[item];
                }
        }
        return totalAmount;
    }
    let removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const contextValues = {getTotalcartAmout,all_product,cartItem,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValues}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;