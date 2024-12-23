import React from "react";
import "../styles/displayWeather.css";

const DisplayWeather = ({ data }) => {
  const { name, main, weather, wind } = data;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <h3>{weather[0].description}</h3>
      <p>🌡️ Temperature: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>💨 Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default DisplayWeather;
