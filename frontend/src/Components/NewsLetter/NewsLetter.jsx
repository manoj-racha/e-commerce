import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter container my-5 d-flex align-items-center justify-content-center  border border-dark custom-border-radius' style={{ height: '40vh' }}>
      <div className="row  align-items-center h-100">
        <div className="col text-center">
          <h1>Get Exclusive offers On Your Email</h1>
          <p>Subscribe to our newsletter and stay updated</p>
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Your Email id"  />
            <button className="btn btn-dark " type="button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
