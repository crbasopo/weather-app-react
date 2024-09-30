import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
      </header>
      <main>
        <h1 className="city">New York</h1>
        <div className="weather-app-data">
          <div>
            <p className="weather-details">
              <span>,</span>
              <span></span>
              <br />
              Humidity: <strong>80%</strong>, Wind: <strong>30km/h</strong>
            </p>
          </div>
          <div className="temperature-container">
            <div>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="icon"
              />
            </div>
            <div className="temperature-value">18</div>
            <div className="temperature-unit">°C</div>
          </div>
        </div>
      </main>

      <footer>
        The project was coded by
        <a href="https://github.com/crbasopo" target="_blank" rel="noreferrer">
          Cheryl R. Basopo
        </a>{" "}
        and the code is hosted on{" "}
        <a
          href="https://github.com/crbasopo/Denga-App"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and the website is hosted on
        <a
          href="https://denga-app.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}
