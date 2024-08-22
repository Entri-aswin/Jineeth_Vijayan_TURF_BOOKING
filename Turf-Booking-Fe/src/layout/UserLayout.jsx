import React from 'react'
import { Outlet } from 'react-router-dom'
import UserNavbar from '../components/navbar/UserNavbar'
import Footer from '../components/user/Footer'
import TestNavbar from '../components/navbar/TestNavbar'

const UserLayout = () => {
    return (
        <div className=''>
            <nav className=' '>
                <TestNavbar />
            </nav>

            <Outlet />
            <Footer />
        </div>
    )
}

export default UserLayout
