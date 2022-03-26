import Chart from "../components/Chart";
import Current from "../components/Current";
import Daily from "../components/Daily";
import NavBar from "../components/NavBar";
import axios from "axios";
import { useState } from "react/cjs/react.development";

export default function Home() {
  const [response, setResponse] = useState({});

  const getWeather = async (lat, lon) => {
    const { data } = await axios.post("/api/getWeather", { lat, lon });
    setResponse(data);
    console.log(data);
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="min-h-screen main-bg">
        <Current />
        <Daily />
        <Chart />
      </main>
    </>
  );
}
