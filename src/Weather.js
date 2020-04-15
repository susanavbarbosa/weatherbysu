import React, { useState } from "react";
import axios from "axios";

import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  let [city, setCity] = useState("");
  let [selected, setSelected] = useState(false);
  let [weather, setWeather] = useState({});

  function displayWeather(response) {
    setSelected(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "393488bece3879e2bb4c2caa27c7b032";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="city-search"
        type="Search"
        placeholder="Enter City Name.."
        onChange={updateCity}
      />
      <button type="Submit" className="search-button">
        Search
      </button>
    </form>
  );

  if (selected) {
    return (
      <div className="card">
        <h2>{form}</h2>
        <h4>Sunday, 15/03/2020, 16h41</h4>

        <div className="result">
          <p>
            <img src={weather.icon} alt={weather.description} />
          </p>
          {Math.round(weather.temperature)}°C | F<p></p>
          <span className="cityTbc">{city}</span>
        </div>

        <h5>Next:</h5>
        <ul>
          <li>Sky: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li className="weather-advice">*wear sunscreen</li>
        </ul>
        <div>
          <div class="container">
            <div className="row">
              <div class="col-sm">
                <div className="nextnamedays">Monday</div>
                <p className="maxdegrees" id="dailyMaxTem">
                  22ºC
                </p>
                <p className="mindegrees" id="dailyMinTem">
                  10ºC
                </p>
              </div>
              <div className="col-sm">
                <div className="nextnamedays">Monday</div>
                <p className="maxdegrees" id="dailyMaxTem">
                  22ºC
                </p>
                <p className="mindegrees" id="dailyMinTem">
                  10ºC
                </p>
              </div>
              <div className="col-sm">
                <div className="nextnamedays">Monday</div>
                <p className="maxdegrees" id="dailyMaxTem">
                  22ºC
                </p>
                <p className="mindegrees" id="dailyMinTem">
                  10ºC
                </p>
              </div>
              <div className="col-sm">
                <div className="nextnamedays">Monday</div>
                <p className="maxdegrees" id="dailyMaxTem">
                  22ºC
                </p>
                <p className="mindegrees" id="dailyMinTem">
                  10ºC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <h2>{form}</h2>
      </div>
    );
  }
}
