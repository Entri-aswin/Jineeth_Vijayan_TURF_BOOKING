import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const UsersTable = () => {

    const [userdata, setUserdata] = useState([]);

    const [search , setSearch] = useState('');

    useEffect(() => {
        const getUsers = async () => {
            try {

                const res = await axios.get("http://localhost:3001/api/v1/user/get-users",
                    { withCredentials: true }
                )

                const userData =await res.data;

                console.log(userData);

                setUserdata(userData);
            } catch (error) {
                console.log(error);
            }

        }
        getUsers();
    }, []);



    const remove =async(id)=>{
        
        const res = axios.delete(`http://localhost:3001/api/v1/user/delete-users/${id}`,
            { withCredentials: true }
        );
        const data = (await res).data;
        console.log(data);

        if (data === 'User deleted') {
            window.location.reload();
        }


    }



    return (
        <div>
            <div className='pt-28 flex justify-center items-center '>
                <form className='w-full flex justify-center' >
                    <input onChange={(e) => setSearch(e.target.value)} type="search" name="search" placeholder='Search Users' className='w-7/12 px-6 py-2 border rounded border-solid' />
                </form>
            </div>
            <div className='pt-6 flex justify-center'>



                <table className="mb-12 table-auto ">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">First Name</th>
                            <th className="px-4 py-2">Second Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {userdata.filter((user) => {
                            return search.toLowerCase() === '' ? user : user.firstName.toLowerCase().includes(search);
                        }).map((user) => (
                            <tr key={user._id}>
                                <td className="border px-4 py-2">{user.firstName}</td>
                                <td className="border px-4 py-2">{user.lastName}</td>
                                <td className="border px-4 py-2">{user.email}</td>
                                <td className="border px-4 py-2">
                                    <div className='flex flex-row'>
                                        <Link onClick={(e)=> remove(user._id)} className='items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>Delete</Link>
                                    </div>
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UsersTable
