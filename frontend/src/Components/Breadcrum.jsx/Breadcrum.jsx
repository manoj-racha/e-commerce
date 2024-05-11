import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import Product from '../../Pages/Product'
const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div>
      <div className="breadcrum d-flex align-items-center m-4">
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
      </div>
    </div>
  )
}

export default Breadcrum
