import React, { useEffect } from "react";
import Seat from "../atoms/Seat";
import { useDispatch } from "react-redux";
import { sinemaDispatch, useAppSelector } from "../../store";
import { fetchAllSeats } from "../../store/feature/SeatSlice";

function SeatList() {
  
  const dispatch = useDispatch<sinemaDispatch>();
  

    useEffect(()=>{       
    dispatch(fetchAllSeats());                 
  },[]);

  const seats = useAppSelector(state => state.seat.seatList); 

  
 

  return (
    <div className="container align-content-center" style={{ height: "90vh" }}>
      <div className="row ">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="row justify-content-start">
            <div className="col">
              {
                <div>
                  {seats.map((seat, index) => (
                    <Seat
                      id={index}
                      key={`${seat.letter}-${seat.no}`}
                      letter={seat.letter}
                      no={seat.no}
                    />
                  ))}
                </div>
              }
            </div>
          </div>
        </div>
        <div className="col-2"></div>
      </div>
      <div
        className="row borders  mt-5 shadow-lg text-center align-items-center"
        style={{
          borderBottomLeftRadius: "40px",
          borderBottomRightRadius: "40px",
          height: "57px",
        }}
      >
        <h3>Perde</h3>
      </div>
    </div>
  );
}

export default SeatList;
