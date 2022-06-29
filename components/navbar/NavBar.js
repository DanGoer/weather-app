// NavBar

import NavBarLogo from "./components/NavBarLogo";
import NavBarSearch from "./components/NavBarSearch";
import NavBarSocialIcons from "./components/NavBarSocialIcons";

function NavBar({
  getGeoCodes,
  setGeoCodes,
  setLocation,
  location,
  locations,
  setLocations,
}) {
  return (
    <>
      <NavBarSearch
        getGeoCodes={getGeoCodes}
        setGeoCodes={setGeoCodes}
        setLocation={setLocation}
        location={location}
        locations={locations}
        setLocations={setLocations}
      />
      <NavBarSocialIcons />
      <NavBarLogo />
    </>
  );
}

export default NavBar;
