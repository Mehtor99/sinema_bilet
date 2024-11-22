import React from "react";
import { NavLink } from "react-router-dom";

function SalonCard() {
  return (
    <div className="card mt-5 mb-5">
      <div className="card-header">
        <div className="row">
          <div className="col-4">
            <h2>
              {" "}
              <i className="fa-solid fa-location-dot fa-sm"></i> Sinema Adı
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
              <h5>Salon Adı</h5>
              <span>Film Dili</span>
            </div>
            <div className="col-9">
              <NavLink to="/seat-selection">
                <input
                  type="button"
                  value="saat"
                  className="btn btn-outline-primary me-2 mt-2"
                />
              </NavLink>
              <input
                type="button"
                value="saat"
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value="saat"
                className="btn btn-outline-primary me-2 mt-2"
              />
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <h5>Salon Adı</h5>
              <span>Film Dili</span>
            </div>
            <div className="col-9">
              <input
                type="button"
                value="saat"
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value="saat"
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value="saat"
                className="btn btn-outline-primary me-2 mt-2"
              />
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <h5>Salon Adı</h5>
              <span>Film Dili</span>
            </div>
            <div className="col-9">
              <input
                type="button"
                value="saat"
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value="saat"
                className="btn btn-outline-primary me-2 mt-2"
              />
              <input
                type="button"
                value="saat"
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
