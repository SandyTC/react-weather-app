import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container main-content">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/SandyTC" target="_blank" rel="noreferrer">
            Sandy Trebilcock
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/SandyTC/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          , and is hosted on{" "}
          <a
            href="https://sandys-react-weather.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
