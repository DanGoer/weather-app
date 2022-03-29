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
    <ul className="col-span-12 md:col-span-4 flex flex-col gap-4 py-6">
      <li>
        <p>Cloudiness: {clouds}%</p>
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
      <hr className="md:hidden border mt-4" />
    </ul>
  );
}

export default CurrentCardMain;
