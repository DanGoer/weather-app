import React from "react";
import NavBarLogo from "./components/NavBarLogo";
import NavBarSearch from "./components/NavBarSearch";
import NavBarSocialIcons from "./components/NavBarSocialIcons";

function NavBar() {
  return (
    <>
      <NavBarSearch />
      <NavBarSocialIcons />
      <NavBarLogo />
    </>
  );
}

export default NavBar;
