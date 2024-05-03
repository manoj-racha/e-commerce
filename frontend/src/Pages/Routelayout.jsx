import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
const Routelayout = () => {
  return (
    <div>
      <Navbar/>
      <div style={{minHeight:'90vh'}} >
        <Outlet/>
      </div>
    </div>
  )
}

export default Routelayout
