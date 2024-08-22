import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios';




const AllTurf = () => {

    const [turfs, setTurfs] = useState([]);

    useEffect(() => {
        const getAllTurfs = async () => {
            try {

                const res = axios.get('http://localhost:3001/api/v1/turfs/get-turfs');

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
    <div className='bg-stone-50 m-10 rounded-3xl '>

    <div className='  ps-4 pt-2 pb-6'>
        <h1 className='text-3xl  text-[#008000]'>All Turfs</h1>

    </div>

    <div className=' ps-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 auto-rows-auto ms-6 sm:ms-0 '>

        {turfs && turfs.map((turf) =>
            <Cards key={turf._id}
                turfId={turf._id}
                image={turf.image}
                title={turf.title}
                description={turf.description}
                price={turf.price} />)}



    </div>
</div>
  )
}

export default AllTurf
