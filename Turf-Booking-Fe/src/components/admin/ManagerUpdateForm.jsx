import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const ManagerUpdateForm = () => {
    const navigate = useNavigate();

    const { id } = useParams();

    const [data, setData] = useState([])

    useEffect(() => {

        const getTurfs = async () => {
            try {

                const res = await axios.put(`http://localhost:3001/api/v1/managers/update-managers/${id}`);

                const Data = await res.data;

                console.log(Data);

                setData(Data);


            } catch (error) {
                console.log(error);
            }
        }
        getTurfs();

    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try {
            const res = await axios.put(`http://localhost:3001/api/v1/managers/update-managers/${id}`, data)
            alert("data updated succesfully");
            navigate('/admin/managers');
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className='flex justify-center items-center h-screen pt-16'>
            <div className='flex  shadow-sm shadow-slate-800 p-3'>
                <div className="w-96 h-96 bg-[url('../public/images/playground.jpg')] bg-no-repeat bg-cover bg-center flex items-center ">
                    
                <form onSubmit={handleSubmit} className='flex flex-col w-full md:hidden p-8'>
                        <input type="text" name='email' value={data.email} disabled placeholder='id' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />

                        <input onChange={(e) => setData({ ...data, name: e.target.value })} type="text" name="name" value={data.name} placeholder='name' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />


                        <input onChange={(e) => setData({ ...data, role: e.target.value })} type="text" name="role" value={data.role} placeholder='role' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />

                

                        <input type="submit" value="Update" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />
                    </form>

                </div>
                <div className='w-96  px-6 py-6 md:flex items-center hidden'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full '>
                        <input type="text" name='email' value={data.email} disabled placeholder='id' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />

                        <input onChange={(e) => setData({ ...data, name: e.target.value })} type="text" name="name" value={data.name} placeholder='name' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />


                        <input onChange={(e) => setData({ ...data, role: e.target.value })} type="text" name="role" value={data.role} placeholder='role' className='mb-4 ps-1 py-1.5 rounded shadow  shadow-green-800 ' />

                

                        <input type="submit" value="Update" className='px-2 py-1.5 w-24 ms-32 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ManagerUpdateForm
