import React, { useState,useEffect } from 'react'

import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios'
import MultipleSelect from './MultipleSelect'
import { useNavigate } from 'react-router-dom'


const schema = yup
    .object({
        managerEmail: yup.string().email(),
        title: yup.string().required('required'),
        category: yup.array().of(yup.string()).required('required'),
        description: yup.string().required('required'),
        price: yup.number().positive().required('required'),
        image: yup.mixed().required('required')
    })
    .required()



const AddTurf = () => {

const navigate =useNavigate();

const [manager,setManager] =useState([]);

    ///////

    useEffect(() => {
        const currentManger = async () => {
    
          try {
            const res = await axios.get(`http://localhost:3001/api/v1/managers/get-current-manager`,
              { withCredentials: true }
            )
            const resData = res.data;
            //console.log(resData);
          
            setManager(resData);
            //console.log(turfs);
          } catch (error) {
            console.log(error);
          }
    
        };
        currentManger();
      }, [])


    ////

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {

        const requestBody = {
            title: data.title,
            category: data.category,
            description: data.description,
            price: data.price,
            managerEmail: data.managerEmail,
            image: data.image[0], // assuming data.image is a File object
        };

        try {

            const res = await axios.post('http://localhost:3001/api/v1/turfs/add-turfs',
                requestBody,
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            )
            const resData = await res.data;
           // console.log(resData);
           if(resData.message ==='created'){
            alert('new turf created');
            navigate('/manager/my-turf');
           }

        } catch (error) {
            console.log(error);
        }


    }
    // const onSubmit =  (data) =>console.log(data);

    return (
        <div className='flex justify-center items-center h-screen pt-16'>
            <div className='flex  shadow-sm shadow-slate-800 p-3'>
                <div className="w-96 h-96 bg-[url('../images/playground.jpg')] bg-no-repeat bg-cover bg-center  ">
                   
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full md:hidden p-8'>
                        <input type="email" name='email' value={manager.email} disabled {...register('managerEmail')} placeholder='Registerd email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.managerEmail?.message}
                        <input type="text" name="title" {...register('title')} placeholder='Title' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.title?.message}



                        <MultipleSelect category='category' register={register} error={errors.category} />

                        <textarea name="description" {...register('description')} placeholder='Description' className='mt-4 mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.description?.message}
                        <input type="text" name="price" {...register('price')} placeholder='Price' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.price?.message}
                        <input type="file" name="image" {...register('image')} placeholder='Image' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.image?.message}
                        <input type="submit" value="Submit" className='mt-4 px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />
                    </form>

                </div>


                <div className='w-96  px-6 py-6 md:flex items-center hidden'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full'>
                        <input type="email" name='email' value={manager.email} disabled {...register('managerEmail')} placeholder='Registerd email' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.managerEmail?.message}
                        <input type="text" name="title" {...register('title')} placeholder='Title' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.title?.message}



                        <MultipleSelect category='category' register={register} error={errors.category} />

                        <textarea name="description" {...register('description')} placeholder='Description' className='mt-4 mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.description?.message}
                        <input type="text" name="price" {...register('price')} placeholder='Price' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.price?.message}
                        <input type="file" name="image" {...register('image')} placeholder='Image' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />
                        {errors.image?.message}
                        <input type="submit" value="Submit" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddTurf
