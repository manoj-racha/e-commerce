import React from 'react'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import all_product from '../Components/Assets/all_product'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  return (
    <div>
      <div className="shop-category  d-flex  flex-column justify-content-center">
        <img src={props.banner} alt="" className='category-image' />
        <div className="d-flex justify-content-between align-items-center shopcategory-indexSort custom-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div class="dropdown">
        <button class="btn btn-light dropdown-toggle border border-dark rounded-pill me-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Sort By
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  </div>
</div>
        </div>
        <div className="shopcategory-products row gx-4">
          {all_product.map((item,i)=>{
            if(props.category === item.category){
              return (
                <div key={i} className="  col-lg-3 col-md-6 col-sm-12 mb-4">
                <Item  id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                </div>
                );
            }
            else
            return null;
          })}
        </div>
        <div className='d-flex d-flex align-items-center justify-content-center'>
          <button className='btn btn-light mb-5 border border-dark rounded-pill'>Explore More</button>
        </div>

      </div>
    </div>
  )
}

export default ShopCategory
