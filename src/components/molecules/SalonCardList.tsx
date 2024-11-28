import React from 'react'
import SalonCard from '../atoms/SalonCard'

function SalonCardList() {
  const salonlar = ['salon1','salon2','salon3']
  const seanslar = [{id:1,saat:'12:30',seatList:[]},{id:1,saat:'12:30',seatList:[]},{id:1,saat:'12:30',seatList:[]},{id:1,saat:'12:30',seatList:[]},{id:1,saat:'12:30',seatList:[]},{id:1,saat:'12:30',seatList:[]},{id:1,saat:'12:30',seatList:[]},{id:1,saat:'12:30',seatList:[]},{id:1,saat:'12:30',seatList:[]}]
  return (
    <div>
        <SalonCard cinemaName='Kanatlı' salonAdi={salonlar} sessions={seanslar}/>
        <SalonCard cinemaName='Kanatlı' salonAdi={salonlar} sessions={seanslar}/>
        <SalonCard cinemaName='Kanatlı' salonAdi={salonlar} sessions={seanslar}/>
        
    </div>
  )
}

export default SalonCardList