import React from 'react'
import seat from '../../utils/seat.png'

interface ISeat{
    letter: string
    no: number
}

function Seat(props: ISeat) {
    
    const {letter,no} = props
  return (
    <>
    
    <div style={{display:'inline-block',position:'relative',padding:'2px'}}>
        <label style={{position:'absolute',left:'13px'}} ><small>{letter+no}</small></label>
         <img src={seat} style={{width:'45px',height:'45px'}} />

    </div>
 
    </>
    
  
  )
}

export default Seat