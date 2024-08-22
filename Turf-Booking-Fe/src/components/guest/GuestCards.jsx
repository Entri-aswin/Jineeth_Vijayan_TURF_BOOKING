import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const GuestCards = ({ image, title, description, price, turfId }) => {

    const navigate = useNavigate();

    const navigateTo = ()=> {
        alert("please login !")
        navigate('/user/signin')
    }


  return (
    <div >

    <div onClick={navigateTo} className="shadow-2xl max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer my-4  w-80 h-96">
        <div className='p-1'>
            <img className="rounded-t-lg h-52 w-full object-cover" src={image} alt="" />
        </div>
        <div className="p-5">
            <h1>{turfId}</h1>
            <div className='flex justify-between'>
                <div >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#008000]">{title}</h5>
                </div>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#030d03]">
                    ₹ {price}
                </div>
            </div>
            <div className='pt-4'>
                <p className="mb-3 font-normal text-gray-800">{description}</p>

            </div>
        </div>
    </div>

</div>
  )
}

export default GuestCards
