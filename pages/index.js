import Chart from "../components/Chart";
import Current from "../components/Current";
import Daily from "../components/Daily";
import NavBar from "../components/NavBar";
import axios from "axios";

export default function Home() {
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
