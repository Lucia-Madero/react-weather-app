import Search from "./Search.js";
import City from "./City.js";
import TodayMore from "./TodayMore.js";
import Calendar from "./Calendar.js";
import Container from "react-bootstrap/Container";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Container />
      <Search />
      <div className="row">
        <div className="col-6">
          {" "}
          <City />
        </div>
        <div className="col-3">
          {" "}
          <TodayMore />
        </div>
        <div className="col-3">
          <Calendar />
        </div>
      </div>
    </div>
  );
}
