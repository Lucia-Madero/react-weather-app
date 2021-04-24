import React, { useState } from "react";

export default function (props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function calculateFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        {" "}
        <div className="units">
          <h1>{Math.round(props.celsius)}</h1>
          <span className="links">
            {" "}
            °C <span className="unit-separator">|</span>
            <a href="noreferrer" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        {" "}
        <div className="units">
          <h1>{Math.round(calculateFahrenheit())}</h1>
          <span className="links">
            {" "}
            <a href="noreferrer" onClick={showCelsius}>
              °C{" "}
            </a>{" "}
            <span className="unit-separator">|</span>
            °F
          </span>
        </div>
      </span>
    );
  }
}
