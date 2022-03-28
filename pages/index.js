import Chart from "../components/Chart";
import Current from "../components/Current";
import Daily from "../components/Daily";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react/cjs/react.development";
import { weatherOBMock } from "../assets/data";

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
    console.log(data);
    setResponse(data);
  };
  /*
  useEffect(() => {
    getGeoCodes("Oberhausen, North Rhine-Westphalia , DE");
  }, [location]);

  useEffect(() => {
    if (geoCodes.lat && geoCodes.lon) getWeather(geoCodes.lat, geoCodes.lon);
  }, [geoCodes]); */

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className=" w-full h-screen main-bg flex flex-col justify-start items-center pt-8">
        <Current geoCodes={geoCodes} response={weatherOBMock} />
        <Daily />
        <Chart />
      </main>
      <footer>impressum</footer>
    </>
  );
}
