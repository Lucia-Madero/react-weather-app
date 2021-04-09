import "./App.css";
import Search from "./Search.js";
import City from "./City.js";
import TodayMore from "./TodayMore.js";

function App() {
  return (
    <div className="App">
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
      </div>
    </div>
  );
}

export default App;
