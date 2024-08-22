import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../config/axiosInstance.js';


const userSigninSchema = yup
  .object({
    email: yup.string().email("must be a valid email").required("please enter your email"),
    password: yup.string().required('enter your password')
  })
  .required()

const UserSignIn = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(userSigninSchema) });

  const OnSubmit = async (data) => {
    try {
     
      const res = await axiosInstance.post("/user/signin", data);
      const resData = res.data;

      console.log(resData);

      if (resData.message === 'loged in') {
        alert("Successfully loged in ")
        navigate("/user/dashbord")
      } else {
        alert('something wrog try again')
      }

    } catch (error) {

    }

  }

  return (
    <div className='flex justify-center items-center h-screen pt-16'>

      <div className='flex  shadow-sm shadow-slate-800 p-3'>
        <div className="w-96 h-96 bg-[url('../images/playground.jpg')] bg-no-repeat bg-cover bg-center flex items-center ">

        <form onSubmit={handleSubmit(OnSubmit)} className='flex flex-col  w-full md:hidden  p-8'>
            <input type="email" {...register("email")} name="email" placeholder='Email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
            {errors.email?.message}
            <input type="password"  {...register("password")} name="password" placeholder='password' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
            {errors.password?.message}
            <input type="submit" value="Login" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />

            <p className='text-white ms-16 mt-4'>
              User not created yet ?{" "}
              <Link to="/user/signup" className="text-blue-500 underline">
                Signup
              </Link>
            </p>

          </form>

        </div>

        <div className='w-96  px-6 py-6 md:flex items-center hidden'>
          <form onSubmit={handleSubmit(OnSubmit)} className='flex flex-col  w-full  '>
            <input type="email" {...register("email")} name="email" placeholder='Email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
            {errors.email?.message}
            <input type="password"  {...register("password")} name="password" placeholder='password' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
            {errors.password?.message}
            <input type="submit" value="Login" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />

            <p className=' ms-16 mt-4'>
              User not created yet ?{" "}
              <Link to="/user/signup" className="text-blue-500 underline">
                Signup
              </Link>
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}

export default UserSignIn;
