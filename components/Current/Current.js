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

  return (
    <section className="card-style grid grid-cols-12 transform-all duration-500 relative">
      <h2 className="col-span-12 md:col-span-4 md:text-5xl pb-8">
        The Weather now in:
      </h2>
      <h3 className="col-span-12 md:col-span-6 pb-8 flex items-center md:text-3xl justify-center">
        {geoCodes.name}, {geoCodes.country}
        {geoCodes.state && <>, {geoCodes.state}</>}
      </h3>
      <>
        <CurrentCardHead
          feels_like={feels_like}
          temp={temp}
          weather={weather}
          humidity={humidity}
          uvi={uvi}
        />
        <CurrentCardMain
          clouds={clouds}
          rain={rain}
          snow={snow}
          visibility={visibility}
          wind_speed={wind_speed}
        />
        <CurrentCardEnd dt={dt} sunset={sunset} sunrise={sunrise} />
      </>
    </section>
  );
}

export default Current;
