import Image from "next/image";
import React from "react";

function CurrentCardHead({ feels_like, temp, weather }) {
  return (
    <div className="flex flex-col gap-4">
      <ul>
        <li>
          <p>{temp.toFixed()}°C</p>
        </li>
        <li>
          <p>Feels like: {feels_like}°C</p>
        </li>

        <li className="flex flex-row items-center justify-center mt-4">
          <Image
            className="inline pb-2"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt={`${weather[0].description} icon`}
            width={70}
            height={70}
          />
          <p className="capitalize">{weather[0].description}</p>
        </li>
      </ul>
    </div>
  );
}

export default CurrentCardHead;
