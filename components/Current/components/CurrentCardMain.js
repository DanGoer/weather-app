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
    <ul>
      <li>
        <p>clouds:{clouds}</p>
      </li>
      <li>
        <p>{humidity}% humidity</p>
      </li>
      <li>
        <p>{rain ? `rain per hour:${rain["1h"]}` : "It is not raining"}</p>
      </li>
      <li>
        <p>{snow ? `snow per hour:${snow["1h"]}` : "It is not snowing"}</p>
      </li>
      <li>
        <p>wind speed:{wind_speed}</p>
      </li>
      <li>
        <p>visibility in m:{visibility}</p>
      </li>
    </ul>
  );
}

export default CurrentCardMain;
