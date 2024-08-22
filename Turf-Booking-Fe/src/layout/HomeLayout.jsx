import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/Footer'

const HomeLayout = () => {
  return (
    <div className='relative'>
      <nav className=''>
        <Navbar />
      </nav>
      <Outlet />
      <Footer />
    </div>
  )
}

export default HomeLayout
