import React from "react";
import CurrentCardEnd from "./components/CurrentCardEnd";
import CurrentCardHead from "./components/CurrentCardHead";
import CurrentCardMain from "./components/CurrentCardMain";

//day js?!

function Current({ geoCodes, response }) {
  return (
    <section className="card-style grid grid-cols-12 transform-all duration-500 relative">
      <h2 className="col-span-12 md:col-span-4 md:text-5xl pb-8">
        The Weather now in:
      </h2>
      {geoCodes ? (
        <h3 className="col-span-12 md:col-span-6 pb-8 flex items-center md:text-3xl justify-center">
          {geoCodes.name}, {geoCodes.country}
          {geoCodes.state && <>, {geoCodes.state}</>}
        </h3>
      ) : (
        <h3 className="col-span-12 md:col-span-6 pb-8 flex items-center md:text-3xl justify-center">
          Waiting for data!
        </h3>
      )}
      <CurrentCardHead
        feels_like={response?.current?.feels_like}
        temp={response?.current?.temp}
        weather={response?.current?.weather}
        humidity={response?.current?.humidity}
        uvi={response?.current?.uvi}
      />
      <CurrentCardMain
        clouds={response?.current?.clouds}
        rain={response?.current?.rain}
        snow={response?.current?.snow}
        visibility={response?.current?.visibility}
        wind_speed={response?.current?.wind_speed}
      />
      <CurrentCardEnd
        dt={response?.current?.dt}
        sunset={response?.current?.sunset}
        sunrise={response?.current?.sunrise}
      />
    </section>
  );
}

export default Current;
