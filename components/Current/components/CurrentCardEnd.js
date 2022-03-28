import React from "react";

function CurrentCardEnd({ dt, sunset, uvi, sunrise }) {
  return (
    <ul className="flex flex-col gap-4">
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
        <p>UV index: {uvi}</p>
      </li>
    </ul>
  );
}

export default CurrentCardEnd;
