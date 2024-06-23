import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather container">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city:"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Sunday 11:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sunny"
              className="float-left"
            />

            <span className="temperature">21</span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 53%</li>
            <li>Wind: 5 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
