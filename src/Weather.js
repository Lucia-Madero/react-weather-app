import React from "react";
import "./Weather.css";

export default function City() {
  return (
    <div className="City, row">
      <div className="today, col-7">
        <h1 id="current-city">Brussels</h1>
        <h4 id="celsius-temp">9</h4>
        <div className="units">
          <a href="noreferrer" id="celsius-link" className="active">
            °C
          </a>
          |
          <a href="noreferrer" id="faren-link">
            °F
          </a>
        </div>
      </div>
      <div className="col-2, more-info">
        <ul>
          <h5 id="description">Clouds</h5>
          <li className="humidity" id="humidity">
            Humidity 76%
          </li>
          <li className="wind" id="wind">
            Wind 32 km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
