import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import "../styles/weather.css";

const Weather = ({ fetchWeather, weatherData }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      fetchWeather(city);
      setCity("");
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <div className="weather-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a city.."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weatherData && <DisplayWeather data={weatherData} />}
    </div>
  );
};

export default Weather;
