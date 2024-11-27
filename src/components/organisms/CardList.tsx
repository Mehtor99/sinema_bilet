import React, { useEffect } from 'react'
import Card from '../molecules/Card'
import { sinemaDispatch, useAppSelector } from '../../store'
import { useDispatch } from 'react-redux';
import { fetchGetAllMovie } from '../../store/feature/movieSlice';
import { useNavigate } from 'react-router-dom';

function CardList() {

  const movieList = useAppSelector(state => state.movie.movieList);
  const dispatch = useDispatch<sinemaDispatch>();
  useEffect(()=>{
    dispatch(fetchGetAllMovie());
  },[])

  const navigate = useNavigate();

  const goToHomePage = (id:number) => {
    
    return navigate('/movie-page/' + id);
  }


  return (
    <div className="row">
      {
        movieList.map((movie,index) => {
          return  <div key={index} className="col-3" onClick={()=>goToHomePage(movie.id)}><Card id={movie.id} imageUrl={movie.thumbnail} title={movie.title}/></div>
        })
      }



          
        </div>
  )
}

export default CardList