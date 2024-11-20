import React from 'react'
import './Card.css'

interface ICard{
    imageUrl: string,
    title: string
}

function Card(props: ICard) {
  return (
    <>
    <div className="card mt-5 sinema-card" style={{width:"18rem;",border:'none'}}>
        <div className="image-div">
          <img src={props.imageUrl} className="card-img-top rounded-3 sinema-image" />
        </div>

         <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
    </div>
    </div>
    </>
  )
}

export default Card