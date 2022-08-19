// Impressum

import { impressumData } from "../../assets/data";
import ImpressumIcons from "./components/ImpressumIcons";

function Impressum() {
  return (
    <footer className="flex flex-col items-center w-full gap-8 py-8 text-white card-style bg-cyan-900/50">
      <h2>Impressum</h2>
      <h3>According to § 5 TMG</h3>
      <address className="text-lg text-center">
        {impressumData.address.name}
        <br />
        {impressumData.address.street}
        <br />
        {impressumData.address.city}
      </address>
      <h3>Contact</h3>
      <address className="text-lg">
        E-Mail: {impressumData.contact.email}
      </address>
      <ImpressumIcons />
    </footer>
  );
}

export default Impressum;
