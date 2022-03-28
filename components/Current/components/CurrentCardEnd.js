import React from "react";

function CurrentCardEnd({ dt, sunset, uvi, sunrise }) {
  return (
    <ul>
      <li>
        <p>current time:{new Date(dt).toString()}</p>
      </li>
      <li>
        <p>sunrise:{new Date(sunrise).toString()}</p>
      </li>
      <li>
        <p>sunset:{new Date(sunset).toString()}</p>
      </li>
      <li>
        <p>uv index:{uvi}</p>
      </li>
    </ul>
  );
}

export default CurrentCardEnd;
