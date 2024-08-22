import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonPayment from './ButtonPayment';


const CartCard = ({ title, image, description, price, turf, turfid, userid }) => {

    //console.log(userid);

    const navigate = useNavigate();

    const [updateCart, setUpdateCart] = useState([]);

    const handleRemove = async () => {
        const res = await axios.put("http://localhost:3001/api/v1/carts/delete-cart", { turfid, userid });
        const resData = await res.data;
        console.log(resData);
        setUpdateCart(resData);
        window.location.reload();
    }

    return (
        <div className='bg-white m-6 shadow-md  sm:w-3/4 border-gray-200 sm:ms-36 '>

            <div className="py-3 sm:py-4">
                <div className="flex items-center">


                    <div className="flex-shrink-0">
                        <img className="w-36 h-36 object-cover" src={image} alt="Turf image" />
                    </div>

                    <div className="sm:flex gap-6 justify-end">
                        <div className='flex-1  min-w-0 ms-4'>
                            <h1 className="text-sm font-medium p-3 text-gray-900 truncate ">
                                {title}
                            </h1>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {description}
                            </p>
                        </div>

                        <div className="inline-flex  items-center text-base font-semibold text-gray-900 p-8">
                            <ButtonPayment turf={turf} />

                            <button onClick={handleRemove} className='px-2 py-1.5 w-24  bg-red-800 text-white hover:bg-red-600 hover:text-black rounded'>Remove</button>
                        </div>

                    </div>
                </div>



            </div>


        </div>
    )
}

export default CartCard
