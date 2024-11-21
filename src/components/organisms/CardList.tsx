import React from 'react'
import Card from '../molecules/Card'

function CardList() {
  return (
    <div className="row">
      
          <div className="col-3"><Card id={1} imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card id={2}  imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card id={3} imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card id={4} imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card id={5} imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card id={6} imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card id={7} imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card id={8} imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card id={9} imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>
          <div className="col-3"><Card id={10} imageUrl="https://picsum.photos/200/200" title="Gladyatör"/></div>


        </div>
  )
}

export default CardList