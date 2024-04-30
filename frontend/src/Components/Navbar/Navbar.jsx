import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
  const[menu,setmenu]=useState("shop")
  return (
    <div className="navbar-box">
        <nav className="navbar navbar-expand-md navbar-light shadow-sm p-1 mb-1 bg-white rounded">
            <div className="container-xxl  px-5">
                <a href="#intro" className="navbar-brand">
                    <span className="fw-bold text-secondary ">
                        <img src={logo} alt="" style={{maxWidth:'50px',maxHeight:'50px'}}/> Shopper
                    </span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end align-items-center" id="main-nav">
                    <ul className="navbar-nav mx-auto align-items-center">
                        <li className="nav-item">
                            <a href="#Shop" className="nav-link" onClick={() => {setmenu("shop")}}>Shop {menu==="shop"? <hr></hr> : <></>}</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={() => {setmenu("mens")}}>Mens {menu==="mens"?<hr></hr>:<></>}</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={() => {setmenu("women")}}>Women {menu==="women"?<hr></hr>:<></>}</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link" onClick={() => {setmenu("kids")}}>Kids {menu==="kids"?<hr></hr>:<></>}</a>
                        </li>
                    </ul>
                    <div className="nav-login-cart ">
                        <button className='btn btn-light m-4 px-4 rounded-pill' onClick={(e) => e.target.classList.add('clicked')}p> Login</button>
                        <img src={cart_icon} alt="" />
                    </div>

                </div>
        </div>
    </nav>
</div>
 )
}

export default Navbar
