import Image from "next/image";
import React from "react";

//day js?!

function Current({ geoCodes, response }) {
  const {
    clouds,
    dew_point,
    dt,
    feels_like,
    humidity,
    pressure,
    sunrise,
    sunset,
    temp,
    uvi,
    visibility,
    weather,
    wind_deg,
    wind_gust,
    wind_speed,
    rain,
    snow,
  } = response.current;

  console.log(new Date(sunrise));
  return (
    <div className="max-w-screen-xl p-8 mx-auto my-0 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-4 ">
      {
        <div className="bg-white">
          <h2 className="text-2xl">Now</h2>
          <div className="">Feels like {feels_like}</div>
          <div className="">{temp.toFixed()}°C</div>
          <Image
            className="inline pb-2"
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt={`${weather[0].description} icon`}
            width={50}
            height={50}
          />
          <div>weather description:{weather[0].description}</div>
          <div>weather main:{weather[0].main} </div>
          <div>{humidity}% humidity</div>
          <div>{weather[0].description}</div>
          <div>clouds:{clouds}</div>
          <div>dew point:{dew_point}</div>
          <div>current time:{new Date(dt).toString()}</div>
          <div>pressure:{pressure}</div>
          <div>sunrise:{new Date(sunrise).toString()}</div>
          <div>sunset:{new Date(sunset).toString()}</div>
          <div>uv index:{uvi}</div>
          <div>visibility in m:{visibility}</div>
          <div>wind direction:{wind_deg}</div>
          <div>{wind_gust && `wind gust:${wind_gust}`}</div>
          <div>{rain && `rain per hour:${rain["1h"]}`}</div>
          <div>{snow && `snow per hour:${snow["1h"]}`}</div>
          <div>wind speed:{wind_speed}</div>
        </div>
      }
    </div>
  );
}

export default Current;
