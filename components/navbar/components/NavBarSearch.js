// NavBarSearch

import { useEffect } from "react";

function NavBarSearch({
  getGeoCodes,
  setGeoCodes,
  setLocation,
  location,
  locations,
  setLocations,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    getGeoCodes(location);
    setLocation("");
  };

  const handleClick = (e) => {
    const loc = locations.find((loc) => loc.lat === Number(e.target.id));

    setGeoCodes({
      name: loc.name,
      country: loc.country,
      lat: loc.lat,
      lon: loc.lon,
      state: loc.state,
    });
    setLocations([]);
    setLocation("");
  };

  const handleChange = ({ target }) => {
    if (target.value.length === 0) {
      setLocations([]);
    }
    setLocation(target.value);
  };

  useEffect(() => {
    if (location.length >= 3) getGeoCodes(location);
  }, [location, getGeoCodes]);

  return (
    <form
      className="flex items-center gap-4"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="relative z-40 flex flex-col">
        <input
          className="py-2 pl-4 rounded sm:w-80 outline-slate-600 outline-4 focus:outline focus:text-slate-700"
          placeholder="Search for a location..."
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
        {locations.length > 0 && (
          <ul className="absolute w-full py-2 rounded-b-lg cursor-pointer top-10 bg-slate-600">
            {locations.map((loc) => (
              <li
                key={loc.lat}
                value={loc.name}
                className="px-4 py-2 text-white rounded-lg hover:bg-blue-900"
                id={loc.lat}
                onClick={handleClick}
              >
                {loc.name}, {loc.country}
                {loc.state && <>, {loc.state} </>}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="px-4 py-2 font-semibold text-white transition-all duration-500 ease-in-out border-2 rounded-md focus:bg-white focus:text-slate-700 border-slate-800 bg-slate-600 hover:bg-white hover:border-slate-100 hover:text-slate-800">
        Search
      </button>
    </form>
  );
}

export default NavBarSearch;
