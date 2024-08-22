import React from 'react'
import { Link } from 'react-router-dom'

const ManagerNavbar = () => {

    const navLinks = [
        {
            path: `/manager/my-turf`,
            value: "My Turf"
        },
        {
            path:'/manager/bookings',
            value:'Bookings'
        },
        {
            path: "/manager/add-turf",
            value: "Add Turf"
        },
        {
            path: "/manager/profile",
            value: "Profile"
        }
    ]

    return (
        <div className='flex justify-between p-4 text-xl fixed w-screen '>
            <h1>Logo</h1>
            <ul className='flex items-center gap-x-5'>
                {navLinks.map((link, index) =>

                    <Link key={index} to={link.path} >
                        <li className='text-green-800 px-5 '>{link.value}</li>
                    </Link>

                )}
            </ul>
        </div>
    )
}

export default ManagerNavbar
