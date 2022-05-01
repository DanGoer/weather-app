import { useTranslation } from "next-i18next";
import React from "react";
import ImpressumContact from "./components/ImpressumContact";
import ImpressumIcons from "./components/ImpressumIcons";
import ImpressumInfo from "./components/ImpressumInfo";
import ImpressumSubtitle from "./components/ImpressumSubtitle";
import ImpressumTitle from "./components/ImpressumTitle";

function Impressum() {
  const { t } = useTranslation("impressum");
  return (
    <footer
      id="impressum"
      className="flex flex-col items-center gap-8 py-8 w-full bg-cyan-900/50 text-white"
    >
      <ImpressumTitle />
      <span className="flex flex-col gap-4">
        <ImpressumSubtitle subtitle={t("paragraph-impressum")} />
        <ImpressumInfo />
      </span>
      <span className="flex flex-col gap-4">
        <ImpressumSubtitle subtitle={t("contact-impressum")} />
        <ImpressumContact />
      </span>
      <ImpressumIcons />
    </footer>
  );
}

export default Impressum;
