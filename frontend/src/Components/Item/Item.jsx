import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='container'> 
      <div className="card d-flex m-5 item" style={{ width: '18rem' }}>
        <Link to={`/product/${props.id}`}>
          <div>
            <img src={props.image} onClick={window.scrollTo(0,0)}
            alt="" className='item' style={{ width: '18rem' }} />
          </div>
        </Link>
        <div className="card-body">
          <p className="card-title item-name">{props.name}</p>
          <div className="item-prices d-flex">
            <h6 className="item-price-new card-text me-2 font-weight-bold">${props.new_price}</h6>
            <h6 className="item-price-old card-text text-decoration-line-through">{props.old_price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
