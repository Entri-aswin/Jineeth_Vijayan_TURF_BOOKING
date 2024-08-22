import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {

    const navLinks = [
        {
            path: "/user/dashbord",
            value: "Home"
        },
        {
            path: "/user/turfs/all",
            value: "Turfs"
        },
        {
            path: "/user/bookings",
            value: "Bookings"
        },
        {
            path: "/user/profile",
            value: "Profile"
        }
    ]

    return (
        <div className='flex justify-between p-4 text-xl fixed w-full  '>
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

export default UserNavbar
