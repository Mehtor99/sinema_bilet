import React, { useEffect } from 'react'
import RatingStar from '../components/atoms/RatingStar'
import { NavLink, useParams } from 'react-router-dom'
import SessionSelection from '../components/organisms/SessionSelection'
import Navbar from '../components/molecules/Navbar'
import MovieHeader from '../components/molecules/MovieHeader'
import { useDispatch } from 'react-redux'
import { sinemaDispatch, useAppSelector } from '../store'
import { fetchGetMovieById } from '../store/feature/movieSlice'

function MoviePage() {

  const {id} = useParams<{ id: string }>(); 
  const dispatch = useDispatch<sinemaDispatch>();
  const movie = useAppSelector(state=>state.movie.movie);
  console.log(movie)

  useEffect(() => {       
    if (id) {
        dispatch(fetchGetMovieById(parseInt(id)));
    }
    }, []);

    

      return (

    <>
   <Navbar />

   <div className='container-fluid'>
    {
      movie &&
      <MovieHeader description={movie?.description}
       duration={movie.duration}
        id={movie.id} 
        imageUrl={movie.imageUrl}
        thumbnail={movie.thumbnail}
        rating={movie.rating}
        releaseDate={movie.releaseDate}
        title={movie.title}
        trailer={movie.trailer}
        />
    }
      
    </div>
    <div className='container'>
      <SessionSelection/>
    </div>
    </>

  )
}

export default MoviePage