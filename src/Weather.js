import React, { useState } from "react";
import axios from "axios";
import Calendar from "./Calendar";
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
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].main,
      humidity: response.data.main.humidity,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-12">
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
          <div className="col"></div>
          <div className="col"></div>
          <div className="col"></div>
          <div className="col">
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </div>

          <div className="col">
            <button type="button" className="btn btn-primary">
              Current
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            {" "}
            <div className="today">
              <h1>{weather.city}</h1>
              <h4>{Math.round(weather.temperature)}</h4>
              <div className="units">
                <a href="noreferrer" className="active">
                  °C
                </a>
                |<a href="noreferrer">°F</a>
              </div>
            </div>
          </div>
          <div className="col- 3">
            <div className="more-info">
              <ul>
                <h5>{weather.description}</h5>
                <li className="humidity">Humidity: {weather.humidity} %</li>
                <li className="wind">Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="calendar">
              {" "}
              <Calendar date={weather.date} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
