import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icom from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'

const Footer = () => {
    return (
    <div>
        <div className="footer d-flex flex-column justify-content-center align-items-center g-2">
            <div className="footer-logo d-flex align-items-center ">
                <img src={footer_logo} alt="" className="me-2"/>
                <h1>SHOPPER</h1>
            </div>
            <ul className='footer-links d-flex list-unstyled flex-wrap mt-4 gap-5'>
                <li >Company</li>
                 <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <div className="footer-social-icons d-flex gap-5 p-3 mb-4 align-items-center">
                <div className="footer-icons-container">
                    <img src={instagram_icom} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright d-flex flex-column align-items-center gap-3 mb-2 ">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
