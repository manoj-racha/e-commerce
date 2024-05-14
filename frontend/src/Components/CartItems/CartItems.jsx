import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItems.css'
const CartItems = () => {
    let {getTotalcartAmout,all_product,cartItem,removeFromCart} = useContext(ShopContext)
  return (
    <div>
        <div className="cartitems mt-4 ms-5">
            <div className="row cartitems-format-main align-items-center ">
                <div className="col">Product</div>
                <div className="col-3">Title</div>
                <div className="col">Price</div>
                <div className="col">Quantity</div>
                <div className="col">Total</div>
                <div className="col">Remove</div>
            </div>
            <hr /> 
            {all_product.map((e) => {
             const quantity = cartItem && cartItem[e.id] ? cartItem[e.id] : 0;
            if (quantity > 0 && e) {
            return (
                <div>
                    <div key={e.id} className="row cartitems-format d-flex justify-content-center align-items-center ">
                        <div className="col"><img src={e.image} alt="" className="carticon-product-icon" /></div>
                        <div className="col-3">{e.name}</div>
                        <div className="col">${e.new_price}</div>
                        <div className="col"><button className="cartitems-quantity btn border border-2">{quantity}</button></div>
                        <div className="col">${e.new_price * quantity}</div>
                        <div className="col"><img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" /></div>
                        
                    </div>
                    <hr /> 
                </div>
            );
                    }
                    return null;
            })}
            <div className="cartitems-down d-flex mt-5 mt-5">
                <div className="cartitems-total">
                    <h4>Cart Total</h4>
                    <div>
                        <div className="cartitems-total-item d-flex justify-content-between  ">
                            <p >Subtotal</p>
                            <p>${getTotalcartAmout()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item d-flex justify-content-between ">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item d-flex justify-content-between">
                            <h5>Total</h5>
                            <h5>${getTotalcartAmout()}</h5>
                        </div>
                    </div>
                    <button className=' '>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode ">
                    <p className='text-dark'>If you have a promo code, enter here</p>
                    <div className="cartitems-promocodebox">
                        <input type="text" name="" id="" placeholder='promo code'/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
