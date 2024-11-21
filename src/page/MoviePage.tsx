import React from 'react'
import RatingStar from '../components/atoms/RatingStar'
import { NavLink } from 'react-router-dom'
import SessionSelection from '../components/organisms/SessionSelection'
import Navbar from '../components/molecules/Navbar'
import MovieHeader from '../components/molecules/MovieHeader'

function MoviePage() {
  return (
   
    <>
   <Navbar />

   <div className='container-fluid'>
      <MovieHeader/>
    </div>
    <div className='container'>
      <SessionSelection/>
    </div>
    </>

  )
}

export default MoviePage