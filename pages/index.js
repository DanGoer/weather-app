// Index file for the app
import Chart from "../components/chart/Chart";
import Current from "../components/current/Current";
import Daily from "../components/daily/Daily";
import NavBar from "../components/navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Impressum from "../components/impressum/Impressum";
import PlaceHolder from "../components/placeholders/PlaceHolder";

// todo: fix py for navbar , fix input field bug, rework some css

export default function Home() {
  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState([]);
  const [geoCodes, setGeoCodes] = useState({});
  const [response, setResponse] = useState({});

  const getGeoCodes = async (location) => {
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
    const { data } = await axios.post("/api/getWeather", { lat, lon });
    setResponse(data);
  };

  useEffect(() => {
    setGeoCodes({
      name: "Bern",
      country: "CH",
      lat: 46.57,
      lon: 7.27,
    });
  }, []);

  useEffect(() => {
    if (geoCodes.lat && geoCodes.lon) getWeather(geoCodes.lat, geoCodes.lon);
  }, [geoCodes]);

  return (
    <div className="flex flex-col">
      <div className="fixed w-screen h-screen bg-center bg-cover bg-main" />
      <header>
        <nav className="relative z-50 flex flex-col-reverse items-center justify-between gap-6 card-style md:flex-row">
          <NavBar
            getGeoCodes={getGeoCodes}
            setGeoCodes={setGeoCodes}
            setLocation={setLocation}
            location={location}
            locations={locations}
            setLocations={setLocations}
          />
        </nav>
      </header>
      {response?.current?.dt ? (
        <main className="flex flex-col items-center justify-start w-full gap-24 py-24">
          <Current geoCodes={geoCodes} response={response} />
          <Chart data={response} />
          <Daily daily={response.daily} date={response.current.dt} />
        </main>
      ) : (
        <main className="flex flex-col items-center justify-start w-full gap-24 py-24">
          <PlaceHolder />
        </main>
      )}
      <Impressum />
    </div>
  );
}
