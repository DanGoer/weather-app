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
    <section className="card-style w-11/12 flex flex-col justify-center align-center gap-8 md:flex-row">
      <div className="md:flex-row">
        <h2 className="">The Weather now in:</h2>
        <h3>Oberhausen, DE, North Rhine-Westphalia</h3>
      </div>
      <div className="">
        <CurrentCardHead
          feels_like={feels_like}
          temp={temp}
          weather={weather}
        />
        <CurrentCardMain
          clouds={clouds}
          rain={rain}
          snow={snow}
          visibility={visibility}
          wind_speed={wind_speed}
          humidity={humidity}
        />
        <CurrentCardEnd dt={dt} sunset={sunset} uvi={uvi} sunrise={sunrise} />
      </div>
    </section>
  );
}

export default Current;
