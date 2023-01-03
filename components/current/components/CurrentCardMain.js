// Current weather for Current

function CurrentCardMain({ clouds, rain, snow, visibility, wind_speed }) {
  return (
    <ul className="flex flex-col justify-center col-span-12 gap-4 px-2 py-2 md:col-span-4 md:border-x-2 border-slate-400 md:items-center">
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
        <hr className="mt-4 border md:hidden border-slate-400" />
      </li>
    </ul>
  );
}

export default CurrentCardMain;
