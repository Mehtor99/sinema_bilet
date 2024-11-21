import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import SessionList from '../molecules/SessionList'
import SalonCardList from '../molecules/SalonCardList'

function SessionSelection() {
   
  return (
   <div className='row '>
        <h1>Seanslar Ve Salonlar</h1>
        <SessionList/>
        <SalonCardList/>
   </div>
  )
}

export default SessionSelection