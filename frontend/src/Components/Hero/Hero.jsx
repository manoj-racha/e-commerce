import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  return (
    
    <div className='hero container-fluid'>
      <div className='row'>
        <div className="col-lg-6">
          <div className="hero-left d-flex flex-column ">
            <h2 className="">NEW ARRIVALS ONLY</h2>
            <div className="hand-hand-icon mb-4">
            <div className="d-flex ">
                <p className="me-2">NEW</p>
                <img src={hand_icon} alt="" className='hand-icon img-fluid ' />
              </div>
            </div>
            <div>
              <p>collections</p>
              <p>for everyone</p>
            </div>
            <button className="btn btn-danger rounded-pill w-auto">
              <div>Latest Collections  <img src={arrow_icon} alt="" /></div>
             
            </button>
          </div>
        </div>
        <div className="col-lg-6 ">
          <div className="hero-right">
            <img src={hero_image} alt="" className='hero-img  img-fluid mb-4'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
