import Image from "next/image";
import React from "react";

function CurrentCardHead({ feels_like, temp, weather }) {
  return (
    <div>
      <h2>The Weather now in:</h2>
      <h3>Oberhausen, DE, North Rhine-Westphalia</h3>
      <ul>
        <li>
          <p>Feels like {feels_like}</p>
        </li>
        <li>
          <p>{temp.toFixed()}°C</p>
        </li>
        <li>
          <Image
            className="inline pb-2"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt={`${weather[0].description} icon`}
            width={50}
            height={50}
          />
        </li>
      </ul>
    </div>
  );
}

export default CurrentCardHead;
