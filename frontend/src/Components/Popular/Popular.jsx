import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular d-flex  flex-column justify-content-center'>
      <div>
        <h1>POPULAR IN WOMEN</h1>
        <hr className='ln '/>
        </div>
      {/* <div className="container d-flex justify-content-center"> */}
        <div className="popular-item row gx-4">
            {data_product.map((item,i) =>{
                return (
                <div key={i} className="  col-lg-3 col-md-6 col-sm-12 mb-4">
                <Item  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                </div>
                );
            })}
        </div>
        {/* </div> */}
    </div>
  )
}

export default Popular
