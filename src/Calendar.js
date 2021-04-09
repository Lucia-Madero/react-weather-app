import React from "react";
import "./Calendar.css";

export default function Calendar() {
  return (
    <div className="Calendar">
      <h5 id="today-calendar">Friday</h5>
      <small>
        <span id="current-date">12 March</span>
      </small>
      <br />
      <small>
        <span id="current-time">17:02</span>
      </small>
    </div>
  );
}
