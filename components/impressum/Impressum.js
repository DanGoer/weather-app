// Impressum

import { impressumData } from "../../assets/data";
import ImpressumIcons from "./components/ImpressumIcons";

function Impressum() {
  return (
    <footer className="card-style flex flex-col items-center gap-8 py-8 w-full bg-cyan-900/50 text-white">
      <h2>Impressum</h2>
      <h3>According to § 5 TMG</h3>
      <p className="text-lg">
        {impressumData.address.name}
        <br />
        {impressumData.address.street}
        <br />
        {impressumData.address.city}
      </p>
      <h3>Contact</h3>
      <p className="text-lg">
        Tel. Nr.: {impressumData.contact.tel}
        <br />
        E-Mail: {impressumData.contact.email}
      </p>
      <ImpressumIcons />
    </footer>
  );
}

export default Impressum;
