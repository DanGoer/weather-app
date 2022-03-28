import React from "react";

function CurrentCardMain({
  clouds,
  rain,
  snow,
  visibility,
  wind_speed,
  humidity,
}) {
  return (
    <ul className="flex flex-col gap-4">
      <li>
        <p>Cloudiness: {clouds}%</p>
      </li>
      <li>
        <p>Humidity: {humidity}% </p>
      </li>
      <li>
        <p>{rain ? `Rain per hour: ${rain["1h"]}mm` : "It is not raining"}</p>
      </li>
      <li>
        <p>{snow ? `Snow per hour: ${snow["1h"]}mm` : "It is not snowing"}</p>
      </li>
      <li>
        <p>Wind speed: {wind_speed} m/s</p>
      </li>
      <li>
        <p>Visibility in m: {visibility}m</p>
      </li>
    </ul>
  );
}

export default CurrentCardMain;
