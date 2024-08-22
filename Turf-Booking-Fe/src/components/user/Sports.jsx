import React from 'react'
import { Link } from 'react-router-dom'

const Sports = () => {
  return (
    <div className='bg-stone-50 m-10 mb-0 rounded-3xl sm:mb-0'>

      <h1 className='text-3xl ps-4 pt-4 text-[#008000]'>Popular Sports</h1>

      <div className='sm:grid sm:grid-cols-6    gap-10 py-10  mx-10 '>

        <Link to={"/user/turfs/badminton"} className="transition ease-in-out delay-0 hover:ring-offset-1 hover:ring ring-[#fd23de] hover:-translate-y-1 hover:scale-110  duration-300   
      sm:mb-0  mb-8 h-96 rounded-xl flex justify-start items-end  bg-[url('../images/badminton.jpg')] bg-no-repeat bg-cover bg-center">
          <h1 className='text-white font-medium ms-5 mb-4'>Badminton</h1>
        </Link>

        <Link to={'/user/turfs/football'} className="transition ease-in-out delay-0 hover:ring-offset-1 hover:ring ring-[#fd23de] hover:-translate-y-1 hover:scale-110  duration-300
      sm:mb-0 mb-8 h-96 rounded-xl flex justify-start items-end bg-[url('../images/football-cover.jpg')] bg-no-repeat bg-cover bg-center">
          <h1 className='text-white font-medium ms-5 mb-4'>Football</h1>
        </Link>

        <Link to={'/user/turfs/swimming'} className="transition ease-in-out delay-0 hover:ring-offset-1 hover:ring ring-[#fd23de] hover:-translate-y-1 hover:scale-110  duration-300
      sm:mb-0 mb-8 h-96 rounded-xl flex justify-start items-end bg-[url('../images/swimming.jpg')] bg-no-repeat bg-cover bg-center">
          <h1 className='text-white font-medium ms-5 mb-4'>Swimming</h1>
        </Link>

        <Link to={'/user/turfs/cricket'} className="transition ease-in-out delay-0 hover:ring-offset-1 hover:ring ring-[#fd23de] hover:-translate-y-1 hover:scale-110  duration-300
      sm:mb-0 mb-8 h-96 rounded-xl flex justify-start items-end bg-[url('../images/cricket-cover.jpg')] bg-no-repeat bg-cover bg-center">
          <h1 className='text-white font-medium ms-5 mb-4'>Cricket</h1>
        </Link>

        <Link to={'/user/turfs/tennis'} className="transition ease-in-out delay-0 hover:ring-offset-1 hover:ring ring-[#fd23de] hover:-translate-y-1 hover:scale-110  duration-300
     sm:mb-0 mb-8 h-96 rounded-xl flex justify-start items-end bg-[url('../images/tennis-cover.jpg')] bg-no-repeat bg-cover bg-center">
          <h1 className='text-white font-medium ms-5 mb-4'>Tennis</h1>
        </Link>

        <Link to={'/user/turfs/tabletennis'} className="transition ease-in-out delay-0 hover:ring-offset-1 hover:ring ring-[#fd23de] hover:-translate-y-1 hover:scale-110  duration-300
     sm:mb-0 mb-8 h-96 rounded-xl flex justify-start items-end bg-[url('../images/table-tennis.jpg')] bg-no-repeat bg-cover bg-center">
          <h1 className='text-white font-medium ms-5 mb-4'>Table Tennins</h1>
        </Link>

      </div>

    </div>
  )
}

export default Sports
