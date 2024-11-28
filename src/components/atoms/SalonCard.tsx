import React from "react";
import { NavLink } from "react-router-dom";
import { ISession } from "../../models/ISession";

interface ISalonCard {
  cinemaName: string,
  salonAdi: string[],
  sessions: ISession[]
}
function SalonCard(props: ISalonCard) {
  return (
    <div className="card mt-5 mb-5">
      <div className="card-header">
        <div className="row">
          <div className="col-4">
            <h2>
              {" "}
              <i className="fa-solid fa-location-dot fa-sm"></i> {props.cinemaName}
            </h2>
          </div>
          <div className="col-6"></div>
          <div className="col-2">
            <h4>
              <i className="fa-regular fa-calendar fa-xs"></i> calendar
            </h4>
          </div>
        </div>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <h5>{props.salonAdi[0]}</h5>
              <span>Film Dili: Türkçe</span>
            </div>
            <div className="col-9">
              <NavLink to="/seat-selection">
                <input
                  type="button"
                  value={props.sessions[0].saat}
                  className="btn btn-outline-primary me-2 mt-2"
                />
              </NavLink>
              <input
                type="button"
                value={props.sessions[1].saat}
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value={props.sessions[2].saat}
                className="btn btn-outline-primary me-2 mt-2"
              />
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <h5>{props.salonAdi[1]}</h5>
              <span>Film Dili: Türkçe</span>
            </div>
            <div className="col-9">
              <input
                type="button"
                value={props.sessions[3].saat}
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value={props.sessions[4].saat}
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value={props.sessions[5].saat}
                className="btn btn-outline-primary me-2 mt-2"
              />
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <h5>{props.salonAdi[2]}</h5>
              <span>Film Dili: Türkçe</span>
            </div>
            <div className="col-9">
              <input
                type="button"
                value={props.sessions[6].saat}
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value={props.sessions[7].saat}
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value={props.sessions[8].saat}
                className="btn btn-outline-primary me-2 mt-2"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SalonCard;
