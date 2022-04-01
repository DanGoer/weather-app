import Chart from "../components/Chart";
import Current from "../components/Current";
import Daily from "../components/Daily";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";
import { weatherOBMock } from "../assets/data";
import Impressum from "../components/impressum";

export default function Home() {
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [geoCodes, setGeoCodes] = useState({});
  const [response, setResponse] = useState({});

  const getGeoCodes = async (location) => {
    console.log("location:" + location);
    const { data } = await axios.post("/api/getGeoCode", { location });
    if (data.length > 1) {
      setLocations(data);
    }
    if (data.length === 1) {
      setGeoCodes({
        name: data[0].name,
        country: data[0].country,
        lat: data[0].lat,
        lon: data[0].lon,
      });
    }
  };

  const getWeather = async (lat, lon) => {
    console.log("lat:" + lat);
    const { data } = await axios.post("/api/getWeather", { lat, lon });
    console.log("data" + JSON.stringify(data));
    setResponse(data);
  };

  useEffect(() => {
    setGeoCodes({
      name: "Oberhausen",
      country: "DE",
      lat: 51.4878,
      lon: 6.8633,
    });
  }, []);

  useEffect(() => {
    if (geoCodes.lat && geoCodes.lon) getWeather(geoCodes.lat, geoCodes.lon);
  }, [geoCodes]);

  return (
    <div className="bg-fixed bg-center bg-cover w-full main-bg">
      <header className="card-style flex flex-col-reverse md:flex-row items-center justify-between gap-6 relative z-50">
        <NavBar
          getGeoCodes={getGeoCodes}
          setGeoCodes={setGeoCodes}
          setLocation={setLocation}
          location={location}
          locations={locations}
          setLocations={setLocations}
        />
      </header>
      {response.current?.dt ? (
        <main className="w-full  flex flex-col justify-start items-center pt-8 gap-14">
          <Current geoCodes={geoCodes} response={response} />
          <Chart data={response} />
          <Daily daily={response.daily} date={response.current.dt} />
        </main>
      ) : (
        <></>
      )}
      <Impressum />
    </div>
  );
}
