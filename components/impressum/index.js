import ImpressumIcons from "./components/ImpressumIcons";

function Impressum() {
  return (
    <footer className="card-style flex flex-col items-center gap-8 py-8 w-full bg-cyan-900/50 text-white">
      <h2>Impressum</h2>
      <h3>According to § 5 TMG</h3>
      <p className="text-lg">
        D. Goergens
        <br />
        Dorstener Strasse 534
        <br />
        46119 Oberhausen
      </p>
      <h3>Contact</h3>
      <p className="text-lg">
        Tel. Nr.: +49 (0) 177 1234567
        <br />
        E-Mail: d.goergens@gmail.com
      </p>
      <ImpressumIcons />
    </footer>
  );
}

export default Impressum;
