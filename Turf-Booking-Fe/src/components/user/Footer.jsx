import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const y = new Date().getFullYear();
    const [year, setYear] = useState(y);


    return (
        <div className='bg-stone-200 pt-24 text-center sm:grid sm:grid-cols-4 sm:gap-10  p-8  '>

            <div className='mb-20'>
                <h1>Logo</h1>
                <p className='mt-6'>© {year} Techmash Solutions Pvt. Ltd.
                    All Rights Reserved.</p>
            </div>

            <div className='mb-20'>
                <h1 className='mb-6'> COMPANY</h1>
                <Link ><h1 className='mb-4'>About us</h1></Link>
                <Link><h1 className='mb-4'>Contact</h1></Link>
                <Link><h1 className='mb-4'>Careers</h1></Link>
                <Link><h1 className=''>Partner with us</h1></Link>
            </div>

            <div className='mb-20'>
                <h1 className='mb-6'>SOCIAL</h1>
                <Link><h1 className='mb-4'>Instagram</h1></Link>
                <Link><h1 className='mb-4'>Facebook</h1></Link>
                <Link><h1 className='mb-4'>Linkedin</h1></Link>
                <Link><h1 className=''>Twitter</h1></Link>
            </div>

            <div className='mb-20'>
                <h1 className='mb-6'>PRIVACY & TERMS</h1>
                <Link><h1 className='mb-4'>Faqs</h1></Link>
                <Link><h1 className='mb-4'>Privacy policy</h1></Link>
                <Link><h1 className='mb-4'>Terms of service</h1></Link>
                <Link><h1 className=''>Cancellation policy</h1></Link>
            </div>

        </div>
    )
}

export default Footer
