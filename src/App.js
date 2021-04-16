import Search from "./Search.js";
import Weather from "./Weather.js";
import Calendar from "./Calendar.js";
import Container from "react-bootstrap/Container";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Container />
      <Search />
      <div className="row">
        <div className="col-9">
          <Weather />
        </div>
        <div className="col-3">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
