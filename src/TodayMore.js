import React from "react";
import "./TodayMore.css";

export default function TodayMore() {
  return (
    <div className="TodayMore">
      <div className="more-info">
        <h5 id="description">Clouds</h5>
        <small>
          {" "}
          <span className="humidity" id="humidity">
            Humidity 76%
          </span>{" "}
        </small>
        <br />
        <small>
          {" "}
          <span className="wind" id="wind">
            Wind 32 km/h
          </span>
        </small>
      </div>
    </div>
  );
}
