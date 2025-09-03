import React from "react";

export default function MonthlyRainfall() {
  return (
    <table className="table-2">
      <tbody>
        <tr>
          <td>Monthly Rainfall</td>
          <td>This year</td>
        </tr>
        <tr>
          <td>
            <strong>45mm</strong>
          </td>
          <td className="rain">+17%</td>
        </tr>
      </tbody>
    </table>
  );
}
