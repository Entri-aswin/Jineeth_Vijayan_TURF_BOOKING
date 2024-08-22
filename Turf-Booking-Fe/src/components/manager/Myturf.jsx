import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import BookedData from './BookedData';


const Myturf = () => {

  const [datas, setDatas] = useState([])

  //console.log(datas);
  const [myturfs, setMyturfs] = useState([]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const currentManger = async () => {

      try {
        const res = await axios.get(`http://localhost:3001/api/v1/managers/get-current-manager`,
          { withCredentials: true }
        )
        const resData = res.data;
        //console.log(resData);
        const turfs = resData.turfs;
        setDatas(turfs);
        //console.log(turfs);
      } catch (error) {
        console.log(error);
      }

    };
    currentManger();
  }, [])

  ///

  useEffect(() => {
    const turfs = async () => {
      try {
        const response = await axios.post(`http://localhost:3001/api/v1/turfs/get-turfsByIds`, { ids: datas },
          { withCredentials: true }
        );
        const turfsData = await response.data;
        // console.log(turfsData);
        setMyturfs(turfsData);

      } catch (error) {
        console.log(error);
      }
    }

    if (datas.length > 0) {
      turfs();
    }
  }, [datas])

  const remove = async (id) => {

    const res = axios.delete(`http://localhost:3001/api/v1/turfs/delete-turfs/${id}`,
      { withCredentials: true }
    );
    const data = (await res).data;
    //console.log(data);

    if (data === 'turf deleted') {
      window.location.reload();
    }


  };



  ///
  return (


    <div className='pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:justify-center md:flex ms-10 sm:ms-0
                     grid-flow-row gap-4 auto-rows-auto'>
      {
        myturfs && myturfs.map(turf => (
          <div className="ms-10 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link to="#">
              <img className="rounded-t-lg h-52 w-full object-cover" src={turf.image} alt="" />
            </Link>
            <div className="p-5">
              <Link to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{turf.title}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{turf.description}</p>

              <div className=' flex justify-between'>

                <Link to="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  {turf.price}
                </Link>
                <div>
                  <Link to={`/manager/turfs/update/${turf._id}`} className="inline-flex items-center me-3 px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    Edit
                  </Link>
                  <Link onClick={(e) => remove(turf._id)} className="inline-flex items-center me-3 px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    delete
                  </Link>
                </div>
              </div>
            </div>
          </div>

        ))
      }
    </div>

  )
}

export default Myturf
