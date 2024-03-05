//? Components
import Cards from "../Cards/Cards";

//? Hooks
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const allCountries = useSelector((state) => state.allCountries);

  useEffect(() => {
    setCountries(allCountries);
  }, [allCountries]);

  return (
    <div>
      <Cards countries={countries} />
    </div>
  );
};

export default Home;
