import React from 'react'
import FirstView from '../../components/user/FirstView'
import Cards from '../../components/user/Cards'
import UserTurfs from '../../components/user/UserTurfs'
import Sports from '../../components/user/Sports'
import Footer from '../../components/user/Footer'
import GuestTurf from '../../components/guest/GuestTurf'
import GuestSports from '../../components/guest/GuestSports'

const GestHomePage = () => {




  return (
    <div className='bg-stone-200'>
      <FirstView />
      <GuestTurf />
      <GuestSports />
    </div>
  )
}

export default GestHomePage
