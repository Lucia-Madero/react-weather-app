import React, { useState } from "react";
import axios from "axios";
import Calendar from "./Calendar";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState(props.city);

  function search() {
    const apiKey = "b8472ba63e135218f57d24b1f32f73fa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleSearchResult(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeather({
      city: response.data.name,
      coords: response.data.coord,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                className="form-control"
                placeholder="Search city"
                autoComplete="off"
                onChange={handleSearchResult}
              />
            </form>
          </div>
          <div className="col-3">
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {" "}
            <div className="today">
              <h1>{weather.city}</h1>
              <Calendar date={weather.date} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-7">
            <WeatherIcon code={weather.icon} size={84} />
            <WeatherTemperature celsius={weather.temperature} />
          </div>
          <div className="col-5">
            <div className="more-info">
              <ul>
                <h6>{weather.description}</h6>
                <li className="humidity">Humidity: {weather.humidity} %</li>
                <li className="wind">Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="forecast-row">
          {" "}
          <WeatherForecast coords={weather.coords} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
