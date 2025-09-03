import React from "react";

export default function Forecast() {
  return (
    <div className="weather-forecast">
      <div className="forecast-day">
        <div className="weather-forecast-date">Tue</div>
        <div className="weather-forecast-icon">🌞</div>
        <div className="weather-forecast-temperature">31° / 17°</div>
      </div>
      <div className="forecast-day">
        <div className="weather-forecast-date">Wed</div>
        <div className="weather-forecast-icon">🌞</div>
        <div className="weather-forecast-temperature">30° / 19°</div>
      </div>
      <div className="forecast-day">
        <div className="weather-forecast-date">Thu</div>
        <div className="weather-forecast-icon">⛅</div>
        <div className="weather-forecast-temperature">28° / 18°</div>
      </div>
      <div className="forecast-day">
        <div className="weather-forecast-date">Fri</div>
        <div className="weather-forecast-icon">🌞</div>
        <div className="weather-forecast-temperature">26° / 18°</div>
      </div>
      <div className="forecast-day">
        <div className="weather-forecast-date">Sat</div>
        <div className="weather-forecast-icon">🌧️</div>
        <div className="weather-forecast-temperature">23° / 18°</div>
      </div>
    </div>
  );
}
