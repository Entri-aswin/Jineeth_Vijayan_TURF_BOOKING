import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';






const UserTurfs = () => {


    const [turfs, setTurfs] = useState([]);

    useEffect(() => {
        const getAllTurfs = async () => {
            try {

                const res = axios.get('http://localhost:3001/api/v1/turfs/get-limited-turf');

                const data = (await res).data;

                // console.log(data);
                setTurfs(data);

            } catch (error) {
                console.log(error);
            }
        };
        getAllTurfs();
    }, []);





    return (
        //ps-4 grid grid-cols-3 grid-flow-row gap-4 auto-rows-auto 
        <div className='bg-stone-50 m-10 rounded-3xl '>

            <div className=' flex justify-between ps-4 pt-2 pb-6'>
                <h1 className='text-3xl  text-[#008000]'>Book Venues</h1>
                <Link to={'/user/turfs/all'}>
                    <h3 className=' text-[#008000] pe-5'>SEE ALL VENUES
                        <ArrowForwardIosIcon />
                    </h3>
                </Link>
            </div>

            <div className='  ps-4   flex  
                      overflow-x-auto no-scrollbar  gap-10 '>

                {turfs && turfs.map((turf) =>
                    <Cards key={turf._id}
                        turfId={turf._id}
                        image={turf.image}
                        title={turf.title}
                        description={turf.description}
                        price={turf.price} />) }

                

            </div>
        </div>
    )
}

export default UserTurfs
