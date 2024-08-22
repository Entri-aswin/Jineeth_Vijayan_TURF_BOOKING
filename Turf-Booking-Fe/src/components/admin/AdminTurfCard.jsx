import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AdminTurfCard = ({ id, image, title, description, price, _id }) => {

  //  console.log(_id);

    const [manager,setManager] = useState([]);

    useEffect(() => {
        const getManagerById = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/v1/managers/get-manager/${ _id}`,
                    {withCredentials:true}
                )
                const managerData = await response.data ;

                setManager(managerData);
            } catch (error) {
                console.log(error);
            }
        }
        getManagerById();
    }, [])

    const remove = async () => {

        const res = axios.delete(`http://localhost:3001/api/v1/turfs/delete-turfs/${id}`,
            { withCredentials: true }
        );
        const data = (await res).data;
        console.log(data);

        if (data === 'turf deleted') {
            window.location.reload();
        }


    };


    return (
        <div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="#">
                    <img className="rounded-t-lg h-52 w-full object-cover" src={image} alt="" />
                </Link>
                <h1>{manager.name}</h1>
                <div className="p-5">
                    <Link to="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>

                    <div className=' flex justify-between'>

                        <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            {price}
                        </Link>
                        <div>
                            <Link to={`/admin/turfs/update/${id}`} className="inline-flex items-center me-3 px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                                Edit
                            </Link>

                            <Link onClick={remove} to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Delete
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminTurfCard
