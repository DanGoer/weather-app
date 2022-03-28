import Image from "next/image";
import React from "react";
import CurrentCardEnd from "./components/CurrentCardEnd";
import CurrentCardHead from "./components/CurrentCardHead";
import CurrentCardMain from "./components/CurrentCardMain";

//day js?!

function Current({ geoCodes, response }) {
  const {
    clouds,
    dt,
    feels_like,
    humidity,
    sunrise,
    sunset,
    temp,
    uvi,
    visibility,
    weather,
    wind_speed,
    rain,
    snow,
  } = response.current;

  console.log(new Date(sunrise));
  return (
    <section className=" w-11/12 bg-slate-300/80 flex flex-col justify-center align-center ">
      <CurrentCardHead feels_like={feels_like} temp={temp} weather={weather} />
      <CurrentCardMain
        clouds={clouds}
        rain={rain}
        snow={snow}
        visibility={visibility}
        wind_speed={wind_speed}
        humidity={humidity}
      />
      <CurrentCardEnd dt={dt} sunset={sunset} uvi={uvi} sunrise={sunrise} />
    </section>
  );
}

export default Current;
