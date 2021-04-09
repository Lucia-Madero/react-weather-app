import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="City">
      <div className="today">
        <h1 id="current-city">Brussels</h1>
        <h4 id="celsius-temp">9</h4>
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
  );
}
