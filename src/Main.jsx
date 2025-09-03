import React from "react";
import WeatherDetails from "./WeatherDetails";
import MonthlyRainfall from "./MonthlyRainfall";
import Forecast from "./Forecast";

export default function Main() {
  return (
    <main>
      <div className="container">
        <img
          className="background-image"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/138/760/original/minimalist-purple-mountains-sunset-wallpaper.jpg?1723466186"
          alt="Background"
        />
        <div id="icon"></div>
        <div className="text-1" id="temperature"></div>
        <div className="line"></div>
        <div className="text-2" id="city"></div>
        <div className="country" id="country"></div>
        <p className="text-3" id="time">
          <strong></strong>
          <br />
        </p>
        <div className="week-day" id="week-day"></div>
        <span className="description" id="description"></span>
      </div>

      <div className="main-layout">
        <div className="left-column">
          <WeatherDetails />
          <MonthlyRainfall />
        </div>

        <Forecast />
      </div>
    </main>
  );
}
