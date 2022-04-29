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
  }, [location]);

  return (
    <form
      className="flex items-center gap-4"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col relative z-40">
        <input
          className="sm:w-80 pl-4 py-2 outline-slate-600 outline-4 focus:outline rounded focus:text-slate-700"
          placeholder="Search for a location"
          type="text"
          name="location"
          value={location}
          onChange={handleChange}
        />
        {locations.length > 0 && (
          <ul className="absolute w-full top-10 py-2 bg-slate-600 rounded-b-lg cursor-pointer">
            {locations.map((loc) => (
              <li
                key={loc.lat}
                value={loc.name}
                className="text-white hover:bg-blue-900 px-4 py-2 rounded-lg"
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
      <button className="focus:bg-white focus:text-slate-700 border-2 border-slate-800 bg-slate-600 text-white font-semibold rounded-md px-4 py-2 hover:bg-white hover:border-slate-100 hover:text-slate-800 transition-all ease-in-out duration-500">
        Search
      </button>
    </form>
  );
}

export default NavBarSearch;
