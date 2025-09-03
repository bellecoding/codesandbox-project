import React from "react";

export default function WeatherDetails() {
  return (
    <table className="current-details">
      <tbody>
        <tr>
          <td>
            <span className="material-symbols-outlined">rainy</span> Humidity{" "}
            <strong id="humidity"></strong>
          </td>
          <td>
            &nbsp;
            <span className="material-symbols-outlined">
              bedtime
            </span> Sunset <strong>21:10</strong>
          </td>
        </tr>
        <tr>
          <td>
            <span className="material-symbols-outlined">air</span> Wind
            <strong id="wind-speed"></strong>
          </td>
          <td>
            &nbsp;
            <span className="material-symbols-outlined">
              clear_day
            </span> Sunrise <strong>06:40</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
