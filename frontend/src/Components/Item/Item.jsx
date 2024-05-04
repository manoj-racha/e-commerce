import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='container'> 
        <div className="card d-flex m-5 item " style={{ width: '18rem' }}>
            <img src={props.image} alt="" className='item' style={{width:''}}/>
            <div className="card-body">
                <p className="card-title item-name  " >{props.name}</p>
                <div className="item-prices d-flex ">
                    <h6 className="item-price-new card-text me-2 font-weight-bold">
                        ${props.new_price}
                    </h6>
                    <h6 className="item-price-old card-text text-decoration-line-through">
                        {props.old_price}
                    </h6>
                </div>
            </div>
</div>
    </div>
  )
}

export default Item
