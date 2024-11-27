import React, { useEffect } from "react";
import RatingStar from "../atoms/RatingStar";
import { IMovieModel } from "../../models/IMovieModel";
import { useDispatch } from "react-redux";
import { sinemaDispatch, useAppSelector } from "../../store";
import { fetchGetMovieById } from "../../store/feature/movieSlice";
import { Link, useParams } from "react-router-dom";

function MovieHeader(props:IMovieModel) {

     const movie = props;

  return (
    <>
    {
      movie && 
      <div
      className="row movie-header"
      style={{
        height: "400px",
        overflow: "hidden",
        backgroundImage: `url(${movie.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <div className="col-3 d-flex justify-content-center">
        <div
          className="row d-grid text-center align-items-center  "
          style={{
            position: "relative", // Konumu ayarlamak için absolute
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Yarı saydam siyah (karartma)
            padding: "0px 30px",
            borderRadius: "10px",
          }}
        >
          <div className="col">
            {" "}
            <h2>{movie.title}</h2>
          </div>
          <div className="col">
            <span>
              
              <h5><RatingStar /> {movie.rating}</h5> 
            </span>
            
          </div>
          <div className="col">
            <div className="row">
              <div className="col p-2">
                <input
                  type="button"
                  className="btn btn-success"
                  value={"Bilet Al"}
                />
              </div>
              <div className="col p-2">
               <a className="btn btn-secondary" href={movie.trailer} target="_blank"> 
                  Fragman izle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col"></div>
      <div className="col"></div>
    </div>

    }
       
    </>
   
   
  );
}

export default MovieHeader;
