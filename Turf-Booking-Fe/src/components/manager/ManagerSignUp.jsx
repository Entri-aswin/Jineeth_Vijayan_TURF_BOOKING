import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const ManagerSignupschema = yup
    .object({
        name: yup.string().required('name required'),
        email: yup.string().email('must be a valid email').required('email required'),
        password: yup.string().min(6, 'atleast 6 characters').required('password required')
    })
    .required()


const ManagerSignUp = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(ManagerSignupschema) });

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:3001/api/v1/managers/signup',
                data,
                { withCredentials: true }
            );

            console.log(res.data.message);

            const resData = res.data.message;

            if (resData === "signed in !") {
                navigate("/manager/dashbord")
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center items-center h-screen pt-16'>
            <div className='flex  shadow-sm shadow-slate-800 p-3'>
                <div className="w-96 h-96 bg-[url('../images/playground.jpg')] bg-no-repeat bg-cover bg-center flex items-center ">

                    <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-full md:hidden p-8 ' >

                        <input type="text" {...register("name")} name="name" placeholder='Name' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800' />
                        {errors.name?.message}
                        <input type="email" {...register("email")} name="email" placeholder='Email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800' />
                        {errors.email?.message}
                        <input type="password"{...register("password")} name="password" placeholder='Password' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800' />
                        {errors.password?.message}
                        <input type="submit" value="Signup" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />

                        <p className='ms-16 mt-4 text-white'>
                            Manager already exist{" "}
                            <Link to="/manager/signin" className="text-blue-500 underline">
                                Signin
                            </Link>
                        </p>

                    </form>

                </div>

                <div className='w-96  px-6 py-6 md:flex items-center hidden'>
                    <form onSubmit={handleSubmit(onSubmit)} className=' flex flex-col w-full'>

                        <input type="text" {...register("name")} name="name" placeholder='Name' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800' />
                        {errors.name?.message}
                        <input type="email" {...register("email")} name="email" placeholder='Email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800' />
                        {errors.email?.message}
                        <input type="password"{...register("password")} name="password" placeholder='Password' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800' />
                        {errors.password?.message}
                        <input type="submit" value="Signup" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />

                        <p className='ms-16 mt-4'>
                            Manager already exist{" "}
                            <Link to="/manager/signin" className="text-blue-500 underline">
                                Signin
                            </Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ManagerSignUp
