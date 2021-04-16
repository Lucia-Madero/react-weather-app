import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState(null);

  function handleResponse(response) {
    setWeather({
      city: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather, row">
        <div className="col-6">
          {" "}
          <div className="today">
            <h1 id="current-city">{weather.city}</h1>
            <h4 id="celsius-temp">{Math.round(weather.temperature)}</h4>
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
        </div>
        <div className="col- 3">
          <div className="more-info">
            <ul>
              <h5 id="description">{weather.description}</h5>
              <li className="humidity" id="humidity">
                Humidity: {weather.humidity} %
              </li>
              <li className="wind" id="wind">
                Wind: {Math.round(weather.wind)} km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b8472ba63e135218f57d24b1f32f73fa";
    let city = props.city;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
