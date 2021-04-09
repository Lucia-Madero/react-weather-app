import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <div className="col-12">
          <form id="search-form">
            <input
              type="search"
              className="form-control"
              placeholder="Search city"
              autoComplete="off"
              id="search-box"
            />
          </form>
        </div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col"></div>
        <div className="col">
          <button type="button" className="btn btn-primary" id="search-button">
            Search
          </button>
        </div>

        <div className="col">
          <button type="button" className="btn btn-primary" id="current-button">
            Current
          </button>
        </div>
      </div>
    </div>
  );
}
