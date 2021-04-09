import React from "react";
import "./TodayMore.css";

export default function TodayMore() {
  return (
    <div className="TodayMore">
      <ul className="more-info">
        <h5 id="description">Clouds</h5>
        <li className="humidity" id="humidity">
          Humidity 76%
        </li>
        <li className="wind" id="wind">
          Wind 32 km/h
        </li>
      </ul>
    </div>
  );
}
