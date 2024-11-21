import React from 'react'
import SessionItem from '../atoms/SessionItem'

function SessionList() {
  return (
    <div className='row rounded-3 border shadow p-3'>
    <div className='col'><SessionItem/></div>
    <div className='col'><SessionItem/></div>
    <div className='col'><SessionItem/></div>
    <div className='col'><SessionItem/></div>
        
    </div>
  )
}

export default SessionList