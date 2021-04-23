import Weather from "./Weather.js";
import Container from "react-bootstrap/Container";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Container />
        <Weather city="Brussels" />
      </div>
    </div>
  );
}
