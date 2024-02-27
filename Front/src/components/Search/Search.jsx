//? Components
import Cards from "../Cards/Cards";

//? Hooks
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const [countries, setCountries] = useState([]);
  const selectedCountries = useSelector((state) => state.selectedCountries);

  useEffect(() => {
    setCountries(selectedCountries);
  }, [selectedCountries]);

  return (
    <div className="search">
      <Cards countries={countries} />
    </div>
  );
};

export default Search;
