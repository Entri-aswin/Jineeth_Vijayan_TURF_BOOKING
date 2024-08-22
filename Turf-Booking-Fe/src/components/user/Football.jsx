import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';




const Football = () => {

    const [turfs, setTurfs] = useState([]);

    useEffect(() => {

        const FootballTurf = async () => {

            const category = 'Football'

            try {

                const res = await axios.get(`http://localhost:3001/api/v1/turfs/get-turf/category/${category}`);
                const resData = await res.data;
                console.log(resData);
                setTurfs(resData);

            } catch (error) {
                console.log(error);
            }

        };
        FootballTurf();
    }, []);

    return (
        <div className='bg-stone-50 m-10 rounded-3xl '>

            <div className='  ps-4 pt-2 pb-6'>
                <h1 className='text-3xl  text-[#008000]'>Football</h1>

            </div>

            <div className=' ps-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-row gap-4 auto-rows-auto '>

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

export default Football
