import React, { useEffect } from 'react'
import Card from '../molecules/Card'
import { sinemaDispatch, useAppSelector } from '../../store'
import { useDispatch } from 'react-redux';
import { fetchGetAllMovie } from '../../store/feature/movieSlice';

function CardList() {
  const movieList = useAppSelector(state => state.movie.movieList);
  const dispatch = useDispatch<sinemaDispatch>();
  useEffect(()=>{
    dispatch(fetchGetAllMovie());
  },[])

  return (
    <div className="row">
      {
        movieList.map((movie,index) => {
          return  <div className="col-3"><Card key={index} id={movie.id} imageUrl={movie.thumbnail} title={movie.title}/></div>
        })
      }



          
        </div>
  )
}

export default CardList