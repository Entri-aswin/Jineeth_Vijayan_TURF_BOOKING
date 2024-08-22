import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TurfNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    const navLinks = [
        {
            path: "/user/turfs/all",
            value: "All"
        },
        {
            path: "/user/turfs/badminton",
            value: "Badminton"
        },
        {
            path: "/user/turfs/football",
            value: "Football"
        },
        {
            path: "/user/turfs/swimming",
            value: "Swimming"
        },
        {
            path: "/user/turfs/cricket",
            value: "Cricket"
        },
        {
            path: "/user/turfs/tennis",
            value: "Tennis",
        },
        {
            path: "/user/turfs/tabletennis",
            value: "Table Tennis"
        }
    ]

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4 ">
            <div className="container mx-auto flex justify-end md:justify-center items-center">

                <h1 className=' flex md:hidden text-xl me-3'>Filter</h1>
                <ul className='hidden md:flex space-x-4 '>
                    {navLinks.map((link, index) =>

                        <Link key={index} to={link.path} >
                            <li className='text-green-800 px-5 border border-green-700 py-3 '>{link.value}</li>
                        </Link>

                    )}
                </ul>

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (

                <ul className='md:hidden flex flex-col space-y-2 mt-4'>
                    {navLinks.map((link, index) =>

                        <Link key={index} to={link.path} >
                            <li className='text-green-800 px-5 '>{link.value}</li>
                        </Link>

                    )}
                </ul>

            )}
        </nav>
    );
};


export default TurfNavbar
