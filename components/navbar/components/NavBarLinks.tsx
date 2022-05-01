import { useTranslation } from "next-i18next";
import { NavBarI } from "../../../types/interfaces";
import NavBarLink from "./NavBarLink";

function NavBarLinks({ toggleNav }: NavBarI) {
  const { t } = useTranslation("navbar");
  return (
    <>
      {t("navbar-links", { joinArrays: "+" })
        .split("+")
        .map((item, index) => {
          return (
            <NavBarLink
              toggleNav={toggleNav}
              idx={index}
              key={item}
              name={item}
            />
          );
        })}
    </>
  );
}

export default NavBarLinks;
