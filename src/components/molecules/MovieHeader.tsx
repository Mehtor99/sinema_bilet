import React from "react";
import RatingStar from "../atoms/RatingStar";
function MovieHeader() {
  return (
    <div
      className="row movie-header"
      style={{
        height: "400px",
        overflow: "hidden",
        backgroundImage: "url(https://picsum.photos/400)",
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
            <h2>MovieTitle</h2>
          </div>
          <div className="col">
            <RatingStar />
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
                <input
                  type="button"
                  className="btn btn-secondary"
                  value={"Fragman İzle"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col"></div>
      <div className="col"></div>
    </div>
  );
}

export default MovieHeader;
