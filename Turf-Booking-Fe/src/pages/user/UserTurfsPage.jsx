import React from 'react'

import TurfNavbar from '../../components/navbar/TurfNavbar'
import { Outlet } from 'react-router-dom'
import TestNavbar from '../../components/navbar/TestNavbar'



const UserTurfsPage = () => {
  return (
    <div >
   
      <nav className=' pt-52'>
       <TurfNavbar />
      </nav>

      <Outlet />
    </div>
  )
}

export default UserTurfsPage
