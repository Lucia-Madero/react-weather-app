import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-12">
          <form>
            <input
              type="search"
              className="form-control"
              placeholder="Search city"
              autoComplete="off"
            />
          </form>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <button type="button" className="btn btn-primary">
            Search
          </button>
        </div>

        <div className="col">
          <button type="button" className="btn btn-primary">
            Current
          </button>
        </div>
      </div>
    </div>
  );
}
