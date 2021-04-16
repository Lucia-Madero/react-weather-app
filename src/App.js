import Search from "./Search.js";
import Weather from "./Weather.js";
import Container from "react-bootstrap/Container";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Container />
        <Search />
        <Weather city="Dakar" />
      </div>
    </div>
  );
}
