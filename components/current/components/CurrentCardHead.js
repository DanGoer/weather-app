import Image from "next/image";
import React from "react";

function CurrentCardHead({ feels_like, temp, weather, humidity, uvi }) {
  return (
    <ul className="col-span-12 md:col-span-3 flex flex-col gap-4 py-2 px-2">
      <li className="flex flex-row items-center justify-center mr-4">
        <Image
          src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
          alt={`${weather[0].description} icon`}
          width={70}
          height={70}
        />
        <p className="capitalize">{weather[0].description}</p>
      </li>
      <li>
        <p>
          <b>Temp: </b>
          {temp.toFixed()}°C
        </p>
      </li>
      <li>
        <p>
          <b>Feels like: </b>
          {feels_like}°C
        </p>
      </li>
      <li>
        <p>
          <b>Humidity: </b>
          {humidity}%
        </p>
      </li>
      <li>
        <p>
          <b>UV index: </b>
          {uvi}
        </p>
      </li>
      <hr className="md:hidden border border-slate-400 mt-4" />
    </ul>
  );
}

export default CurrentCardHead;
