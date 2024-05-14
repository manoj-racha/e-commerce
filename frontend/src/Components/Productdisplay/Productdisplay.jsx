import React, { useContext } from 'react'
import './Productdisplay.css'
 import star_icon from '../Assets/star_icon.png'
 import start_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const Productdisplay = (props) => {
    const {product} = props;
    let {addToCart} = useContext(ShopContext)
  return (
    <div>
      <div className="container productdisplay d-flex ">
        <div className="row">
            <div className="productdisplay-left col-6 d-flex gap-2">
                <div className="productdisplay-img-list d-flex flex-column gap-2">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                </div>
                <div className="proudctdisplay-img">
                    <img src={product.image} alt="" className="productdisplay-main-img" />
                </div>
            </div>
            <div className="col-6 productdisplay-right d-flex flex-column ">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star d-flex align-items-center gap-1">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={start_dull_icon} alt="" />
                    <p className='mt-3'>(122)</p>
                </div>
                <div className="productdisplay-right-prices d-flex ms-2 gap-3">
                    <div className="old-price text-decoration-line-through font-weight-bold">${product.old_price}</div>
                    <div className="new-price text-danger">${product.new_price}</div>
                </div>
                <div className="productsiplay-right-description mt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus maxime accusantium illum enim, perspiciatis repellendus eius officiis aliquid magnam dolore dolor necessitatibus, fugit autem modi, dicta beatae! A, modi asperiores.
                </div>
                <div className="productdisplay-size mt-4">
                    <h5>Select Size</h5>
                    <div className="productdisplay-size d-flex gap-3 m-1 ">
                        <div className='border border-2'>S</div>
                        <div className='border border-2'>M</div>
                        <div className='border border-2'>L</div> 
                        <div className='border border-2'>XL</div>
                        <div className='border border-2'>XXL</div>
                    </div>
                </div>
                <button className='btn btn-danger mb-3 border-0 outline-none mt-3 ' style={{ width: '200px'}} onClick={() =>{addToCart(product.id)}}>ADD TO CART</button>
                <div className="productdisplay-right-category mb-3 mt-3"><span style={{fontWeight:'600'}}>Category :</span>Women, T-Shirt, Crop Top</div>
                <div className="productdisplay-right-category"><span  style={{fontWeight:'600'}}>tags :</span>Modern, Latest</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Productdisplay
