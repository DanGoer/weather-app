import React from "react";

function CurrentCardEnd({ dt, sunset, uvi, sunrise }) {
  return (
    <ul className="col-span-12 md:col-span-4 flex flex-col gap-4 py-6">
      <li>
        <p>current time:{new Date(dt).toString()}</p>
      </li>
      <li>
        <p>sunrise:{new Date(sunrise).toString()}</p>
      </li>
      <li>
        <p>sunset:{new Date(sunset).toString()}</p>
      </li>
    </ul>
  );
}

export default CurrentCardEnd;
