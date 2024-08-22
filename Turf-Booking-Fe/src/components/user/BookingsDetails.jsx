import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const schema = yup
    .object({
        userEmail: yup.string().email(),
        turfName: yup.string(),
        turfId: yup.string(),
        category: yup.string().required('required'),
        date: yup.string().required('required'),
        startingTime: yup.string().required('required'),
        duration: yup.string().required('is required')
    })
    .required()


const BookingsDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [turf, setTurf] = useState([]);
    const [category, setCategory] = useState([]);
    const [user, setUser] = useState([]);



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })



    useEffect(() => {
        if (location.state && location.state.turf) {
            setTurf(location.state.turf);
            setCategory(location.state.turf.category);
        }
    }, [location.state]);



    useEffect(() => {

        const getCurrentUser = async () => {
            try {
                const res = await axios.get("http://localhost:3001/api/v1/user/get-current-user",
                    { withCredentials: true }
                );
                const resData = await res.data;
                setUser(resData);

            } catch (error) {
                console.log(error);
            }
        };
        getCurrentUser();
    }, []);



    ///////
    const onSubmit = async (data, event) => {

        event.preventDefault();


        const requestBody = {
            userEmail: user.email,
            turfName: turf.title,
            turfId: turf._id,
            category: data.category,
            date: data.date,
            startingTime: data.startingTime,
            duration: data.duration
        };

        try {

            const res = await axios.post('http://localhost:3001/api/v1/booking/create-booking',
                requestBody

            )
            const resData = res.data;
            //console.log(resData.message);

            if (resData.message === "booking done") {
                alert("booked successfully");
                navigate('/user/bookings');
            }

        } catch (error) {
            console.log(error);
        }


    }

    ////////





    return (





        <div className='flex justify-center items-center h-screen pt-20 '>
            <div className='flex  shadow-sm shadow-slate-800 p-3'>
                <div className="w-96 h-96 bg-[url('../public/images/playground.jpg')] bg-no-repeat bg-cover bg-center flex items-center  ">

                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full md:hidden p-8 '>

                        <input type="email" name='userEmail' value={user.email} disabled {...register('userEmail')} placeholder='email' className='mb-2 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.userEmail?.message}
                        <input type="text" name="turfName" value={turf.title} disabled {...register('turfName')} placeholder='TurfName' className='mb-2 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.turfName?.message}
                        <input type="text" name="turfId" value={turf._id} disabled {...register('turfId')} placeholder='TurfId' className='mb-2 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.turfId?.message}

                        <select name="category" {...register('category')} className='mb-2 ps-1 py-1.5 rounded shadow  shadow-green-800'>
                            {category && category.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                        {errors.category?.message}

                        <input type="date" name="date" {...register('date')} placeholder='date' className='mb-2 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.date?.message}

                        <input type="time" name="startingTime" {...register('startingTime')} placeholder='Starting Time' className='mb-2 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.startingTime?.message}
                        <input type="text" name="duration" {...register('duration')} placeholder='Duration' className='mb-2 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.duration?.message}
                        <input type="submit" value="Submit" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />

                    </form>

                </div>
                <div className='w-96  px-6 py-6 md:flex items-center hidden'>


                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>

                        <input type="email" name='userEmail' value={user.email} disabled {...register('userEmail')} placeholder='email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.userEmail?.message}
                        <input type="text" name="turfName" value={turf.title} disabled {...register('turfName')} placeholder='TurfName' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.turfName?.message}
                        <input type="text" name="turfId" value={turf._id} disabled {...register('turfId')} placeholder='TurfId' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.turfId?.message}

                        <select name="category" {...register('category')} className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800'>
                            {category && category.map((item, index) => <option key={index} value={item}>{item}</option>)}
                        </select>
                        {errors.category?.message}

                        <input type="date" name="date" {...register('date')} placeholder='date' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.date?.message}

                        <input type="time" name="startingTime" {...register('startingTime')} placeholder='Starting Time' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.startingTime?.message}
                        <input type="text" name="duration" {...register('duration')} placeholder='Duration' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.duration?.message}
                        <input type="submit" value="Submit" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />

                    </form>


                </div>
            </div>
        </div>



    )
}

export default BookingsDetails
