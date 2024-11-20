import React from 'react'
import Seat from '../components/atoms/Seat'



function SeatSelectionPage() {

  const rows = []; // Harf ve numaraların kombinasyonunu tutacak dizi

  for (let i = 1; i <= 12; i++) { // Sayı döngüsü
    for (let j = 97; j < 102; j++) { // 'a' ile 'e' arasındaki harflerin ASCII kodları (97-101)
      rows.push({ letter: String.fromCharCode(j).toUpperCase(), no: i });
    }
  }

  return (

 
   

    <div className="container align-content-center" style={{height:'90vh'}}>
      <div className="row ">
        <div className="col-3"></div>
        <div className="col-6">
            <div className="row justify-content-start" >
              <div className="col">
               
                {
                   <div>
                   {rows.map((seat, index) => (
                     <Seat key={`${seat.letter}-${seat.no}`} letter={seat.letter} no={seat.no} />
                   ))}
                   </div>
                } 
       
                
            
               
              </div>
              
             

              
  




              
            
              
            </div>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  )
}

export default SeatSelectionPage