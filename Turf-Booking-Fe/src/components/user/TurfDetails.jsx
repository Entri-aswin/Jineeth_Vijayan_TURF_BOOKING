import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';




const categoryIcon = {
  'Football': (<p className=''>Football</p>),
  'Tennis': (<p className=''>Tennis</p>),
  'Swimming': (<p className=''>Swimming</p>),
  'Cricket': (<p className=''>Cricket</p>),
  'Badminton': (<p className=''>Badminton</p>),
  'Table Tennis': (<p className=''>TableTennis</p>)
}


const TurfDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const [datas, setDatas] = useState([]);

  const [categoryDatas, setCategoryDatas] = useState([]);

  const [user, setUser] = useState([]);


  useEffect(() => {

    const getOneturf = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/v1/turfs/get-oneturfbyId/${id}`,
          { withCredentials: true });
        const resData = await res.data;
        setCategoryDatas(resData.category);
        setDatas(resData);
      } catch (error) {
        console.log(error);
      }
    };
    getOneturf();
  }, []);


  useEffect(() => {

    const getCurrentUser = async () => {
      try {
        const res = await axios.get("http://localhost:3001/api/v1/user/get-current-user",
          { withCredentials: true }
        );
        const resData = await res.data;
        setUser(resData);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentUser();
  }, []);



  const handleClick = async () => {

    const turfId = datas._id
    const userId = user._id
    console.log(`turf id ${turfId}`);

    console.log(`user id ${userId}`);

    try {

      const res = await axios.post("http://localhost:3001/api/v1/carts/addCart", { turfId, userId });

      const resData = await res.data;

      if (resData === "already added to bookings") {
        alert("Turf already added to bookings");
      }

      //  console.log(resData);

      navigate('/user/bookings', { state: { currentUser: userId } });

    } catch (error) {
      console.log(error);
    }


  }

  return (

    <div className='flex justify-center items-center h-screen  md:pt-16 pt-96 mb-80 md:mb-0 '>

      <div className='md:flex  shadow-sm shadow-slate-800 p-3  '>
        <div className="w-96 h-96  bg-no-repeat bg-cover bg-center ms-4 md:ms-0" style={{ backgroundImage: `url(${datas.image})` }}>

        </div>

        <div className='w-96  px-6 py-6 m-4  shadow-sm shadow-slate-800 '>
          <h1>Sports Available</h1>
          <div className="grid grid-cols-3 grid-flow-row gap-2 auto-rows-auto mt-6 ">

            {categoryDatas && categoryDatas.map((data, index) =>
              <div className='shadow-sm shadow-slate-800 text-center' key={index}> {categoryIcon[data]}</div>
            )}
          </div>


          <div className="mt-6">
            <h5 className="text-4xl">{datas.title}</h5>
            <p className="mt-8">{datas.description}</p>
            <input type="submit" onClick={handleClick} value="Add to Booking" className='mt-8 px-2 py-1.5 w-32 ms-24 bg-green-800 text-white hover:bg-green-600 hover:text-black rounded' />
          </div>


        </div>
      </div>
    </div>
  )
}

export default TurfDetails
