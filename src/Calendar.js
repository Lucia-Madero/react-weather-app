import React from "react";
import "./Calendar.css";

export default function Calendar() {
  return (
    <div className="Calendar">
      <ul className="calendar-more">
        <h5 id="today-calendar">Friday</h5>
        <small>
          <li id="current-date">12 March</li>

          <li id="current-time">17:02</li>
        </small>
      </ul>
    </div>
  );
}
