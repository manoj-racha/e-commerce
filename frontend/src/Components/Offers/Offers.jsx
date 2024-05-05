import React from 'react';
import './Offers.css';
import hero_image from '../Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className=" offers container my-5">
      <div className="row">
        <div className="col-md-6 offers-left d-flex align-items-center">
          <div>
            <p className='display-4 font-weight-bold '> Exclusive</p>
            <p  className='display-4 '>Offers For You</p>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className="btn btn-danger rounded-pill " style={{width:'250px'}}>Check Now</button>
          </div>
        </div>
        <div className="col-md-6 offers-right d-flex align-items-center">
          <img src={hero_image} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Offers;
