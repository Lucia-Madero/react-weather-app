import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          {" "}
          <div className="WeatherForecast-day">Thu </div>
          <div className="WeatherForecast-icon">icon</div>
          <span className="WeatherForecast-temp-max">8°</span>
          <span className="WeatherForecast-temp-min"> 6°</span>
        </div>
      </div>
    </div>
  );
}
