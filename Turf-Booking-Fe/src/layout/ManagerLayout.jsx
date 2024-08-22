import React from 'react'
import { Outlet } from 'react-router-dom'
import ManagerNavbar from '../components/navbar/ManagerNavbar'

const ManagerLayout = () => {
    return (
        <div>
            <nav>
                <ManagerNavbar />
            </nav>

            <Outlet />
        </div>
    )
}

export default ManagerLayout
