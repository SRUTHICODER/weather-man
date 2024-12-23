import React, { useState } from "react";
import Weather from "./components/Weather";
import "./styles/weather.css";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeather API key
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert("City not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>React Weather App</h1>
      <Weather fetchWeather={fetchWeather} weatherData={weatherData} />
    </div>
  );
};

export default App;
