import React, { useState } from "react";
import seat from "../../utils/seat.png";
import { sinemaDispatch, useAppSelector } from "../../store";
import { ISeat } from "../../models/ISeat";
import { useDispatch } from "react-redux";
import { removeSeat, setSelectedSeats } from "../../store/feature/SeatSlice";
// import swal from "sweetalert";
function Seat(props: ISeat) {
  const { letter, no } = props;
  const dispatch = useDispatch<sinemaDispatch>();

  const isNineSelected = useAppSelector((state) => state.seat.isNineSelected);
  const [isSelected, setIsSelected] = useState(false);

  const seatSelect = () => {
    if (isSelected) {
      dispatch(removeSeat(props));
    }
    console.log(isNineSelected);
    if (isNineSelected) {
      alert("9 adet koltuk seçebilirsin!");
      return;
    }
    if (!isNineSelected) {
      dispatch(setSelectedSeats(props));
    }

    setIsSelected(!isSelected);
  };

  return (
    <>
      <div
        onClick={seatSelect}
        style={
          isSelected
            ? {
                display: "inline-block",
                position: "relative",
                padding: "2px",
                margin: "4px",
                border: "1px solid green",
                backgroundColor: "green",
                borderRadius: "5px",
              }
            : {
                display: "inline-block",
                position: "relative",
                padding: "2px",
                margin: "4px",
                border: "1px solid black",
                borderRadius: "5px",
              }
        }
      >
        <label style={{ position: "absolute", left: "13px" }}>
          <small>{letter + no}</small>
        </label>
        <img src={seat} style={{ width: "45px", height: "45px" }} />
      </div>
    </>
  );
}

export default Seat;
