import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemperature = Math.round(props.data.temp.max);
    return `${maxTemperature}°`;
  }

  function minTemperature() {
    let minTemperature = Math.round(props.data.temp.min);
    return `${minTemperature}°`;
  }

  function calculateDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fry", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{calculateDay()} </div>
      <div className="WeatherForecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} />
      </div>
      <span className="WeatherForecast-temp-max">{maxTemperature()}</span>
      <span className="WeatherForecast-temp-min"> {minTemperature()}</span>
    </div>
  );
}
