import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminTurfCard from './AdminTurfCard';

const AdminTurfs = () => {

    const [turfs, setTurfs] = useState([]);

    useEffect(() => {
        const getAllTurfs = async () => {
            try {

                const res = axios.get('http://localhost:3001/api/v1/turfs/get-turfs');

                const data = (await res).data;
                console.log(data);
                setTurfs(data);

            } catch (error) {
                console.log(error);
            }
        };
        getAllTurfs();
    }, []);

    return (
        <div>
        <h1></h1>
            <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 ms-16 md:ms-0 sm:ms-0
                     grid-flow-row gap-4 auto-rows-auto'>
                {turfs && turfs.map((turf) =>
                    <AdminTurfCard
                        key={turf._id}
                        _id={turf.manager[0]}
                        id={turf._id}
                        image={turf.image}
                        title={turf.title}
                        description={turf.description}
                        price={turf.price} />)}

            </div>
        </div>
    )
}

export default AdminTurfs
