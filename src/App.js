import "./App.css";
import Search from "./Search.js";
import City from "./City.js";

function App() {
  return (
    <div className="App">
      <Search />
      <div className="row">
        <div className="col-6">
          {" "}
          <City />
        </div>
      </div>
    </div>
  );
}

export default App;
