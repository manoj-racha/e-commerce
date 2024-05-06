import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='mb-5'>
      <div className="loginsignup">
        <div className="loginsignup-container container d-flex flex-column  bg-light">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields gap-3 mt-1 d-flex flex-column">
            <input type="text" name="" id="" placeholder='You Name'/>
            <input type="email" name="" id="" placeholder='Email Adress' />
            <input type="password" placeholder='Password' />
          </div>
          <button className='btn btn-danger m-3'>Continue</button>
          <p className="loginsignup-login">Already have an account? <span className='text-danger text-decoration-bold'>Login here</span></p>
          <div className="loginsignup-agree d-flex align-items-start">
            <input type="checkbox" name="" id="" className="mt-1 me-1 mr-2"/>
            <p className='ptext '>By continuing, i agree to the terms of use & privacy polacy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
