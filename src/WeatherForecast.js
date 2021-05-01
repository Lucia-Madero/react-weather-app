import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (weekForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key="index">
                  <WeatherForecastDay data={weekForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "b8472ba63e135218f57d24b1f32f73fa";
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
  return null;
}
