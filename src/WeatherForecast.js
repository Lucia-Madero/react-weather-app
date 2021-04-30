import React from "react";
import WheatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const apiKey = "b8472ba63e135218f57d24b1f32f73fa";
  let latitude = props.coords.lat;
  let longitude = props.coords.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response);
  }
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          {" "}
          <div className="WeatherForecast-day">Thu </div>
          <div className="WeatherForecast-icon">
            <WheatherIcon code="01d" />
          </div>
          <span className="WeatherForecast-temp-max">8°</span>
          <span className="WeatherForecast-temp-min"> 6°</span>
        </div>
      </div>
    </div>
  );
}
