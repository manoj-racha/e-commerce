import React from 'react'
import './RelatedProducts'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div>
        <div className="relatedproduct d-flex flex-column align-items-center gap-1">
            <h1>Related Products</h1>
            <hr className='ln'/>
        </div>
        <div className="relatedprocts-item d-flex" >
            {data_product.map((item,i) => {
                           return (                
                            <div key={i} className="  col-lg-3 col-md-6 col-sm-12 ">
                            <Item  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                            </div>)
            })}
        </div>
      
    </div>
  )
}

export default RelatedProducts
