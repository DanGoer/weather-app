// Current weather

import CurrentCardEnd from "./components/CurrentCardEnd";
import CurrentCardHead from "./components/CurrentCardHead";
import CurrentCardMain from "./components/CurrentCardMain";

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
    <section className="relative grid grid-cols-12 duration-500 card-style transform-all">
      <h2 className="col-span-12 pb-8 md:col-span-4 md:text-5xl">
        Current weather in:
      </h2>
      <h3 className="flex items-center justify-center col-span-12 pb-8 md:col-span-6 md:text-5xl">
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
