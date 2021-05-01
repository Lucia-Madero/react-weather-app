import React from "react";
import "./Calendar.css";

export default function Calendar(props) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let month = months[props.date.getMonth()];
  let number = now.getDate();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div className="Calendar">
      <ul className="calendar-more">
        <li className="day">{day} - </li>
        <li>
          {number} {month} -
        </li>
        <li>
          {" "}
          Last updated: {""}
          {hours}:{minutes}
        </li>
      </ul>
    </div>
  );
}
