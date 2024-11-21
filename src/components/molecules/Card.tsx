import React from 'react'
import './Card.css'
import { NavLink } from 'react-router-dom'

interface ICard{
    id: number,
    imageUrl: string,
    title: string
}

function Card(props: ICard) {
  const  {id,imageUrl,title} = props; 
  return (
    <>
    <div className="card mt-5 sinema-card" style={{width:"18rem;",border:'none'}}>
      <NavLink to={'/movie-page?id='+id}> 
        <div className="image-div">
          <img src={props.imageUrl} className="card-img-top rounded-3 sinema-image" />
        </div>

         <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
    </div>
    </NavLink>
    </div>
    </>
  )
}

export default Card