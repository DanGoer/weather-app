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
    <ul className="col-span-12 md:col-span-4 flex flex-col gap-4 py-2 md:border-x-2 border-slate-400 px-2 justify-center md:items-center ">
      <li>
        <p>
          <b>Cloudiness: </b>
          {clouds}%
        </p>
      </li>
      <li>
        <p>
          {rain ? (
            <>
              <b>Rain per hour: </b>
              {rain["1h"]}mm
            </>
          ) : (
            "It is not raining!"
          )}
        </p>
      </li>
      <li>
        <p>
          {snow ? (
            <>
              <b>Snow per hour: </b>
              {snow["1h"]}mm
            </>
          ) : (
            "It is not snowing!"
          )}
        </p>
      </li>
      <li>
        <p>
          <b>Wind speed: </b>
          {wind_speed} m/s
        </p>
      </li>
      <li>
        <p>
          <b>Visibility in m: </b>
          {visibility}m
        </p>
      </li>
      <hr className="md:hidden border border-slate-400 mt-4" />
    </ul>
  );
}

export default CurrentCardMain;
