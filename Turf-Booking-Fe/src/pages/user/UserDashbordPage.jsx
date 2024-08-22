import React from 'react'
import FirstView from '../../components/user/FirstView'
import UserTurfs from '../../components/user/UserTurfs'
import Sports from '../../components/user/Sports'


const UserDashbordPage = () => {
  return (
    <div className='bg-stone-200'>
      <FirstView />
      <UserTurfs />
      <Sports />
    </div>
  )
}

export default UserDashbordPage
