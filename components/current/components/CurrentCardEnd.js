// Current weather for Current

import React from "react";

function CurrentCardEnd({ dt, sunset, sunrise }) {
  return (
    <ul className="col-span-12 md:col-span-5 flex flex-col justify-center items-center gap-4 py-2 px-2">
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
