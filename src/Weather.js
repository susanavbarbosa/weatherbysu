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
        type="Search"
        placeholder="Enter City Name.."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (selected) {
    return (
      <div className="card">
        <h2>{form}</h2>
        <h4>
          <img src={weather.icon} alt={weather.description} />
          {Math.round(weather.temperature)}°C | F
        </h4>
        <p></p>
        <ul>
          <li>Sky: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li className="weather-advice">wear sunscreen</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
