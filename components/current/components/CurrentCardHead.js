// Current weather for Current

import Image from "next/image";

function CurrentCardHead({ feels_like, temp, weather, humidity, uvi }) {
  return (
    <ul className="flex flex-col col-span-12 gap-4 px-2 py-2 md:col-span-3">
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
        <hr className="mt-4 border md:hidden border-slate-400" />
      </li>
    </ul>
  );
}

export default CurrentCardHead;
