// Current weather for Current

import React from "react";

function CurrentCardEnd({ dt, sunset, sunrise }) {
  return (
    <ul className="flex flex-col items-center justify-center col-span-12 gap-4 px-2 py-2 md:col-span-5">
      <li>
        <p>
          <b>Current time: </b>
          {new Date(dt * 1000).toString()}
        </p>
      </li>
      <li>
        <p>
          <b>Sunrise: </b>
          {new Date(sunrise * 1000).toString()}
        </p>
      </li>
      <li>
        <p>
          <b>Sunset: </b>
          {new Date(sunset * 1000).toString()}
        </p>
      </li>
    </ul>
  );
}

export default CurrentCardEnd;
