//? Styles
import "./NavBar.css";

//? Hooks
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

//? Redux
import { useDispatch } from "react-redux";
import {
  addCountries,
  addCountriesByName,
  activitySearch,
} from "../../redux/actionCreator";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const returnToHome = () => {
    navigate("/home");
  };

  const [orderType, setOrderType] = useState("name");
  const [continent, setContinent] = useState("All");
  const [userInput, setUserInput] = useState("");
  const [order, setOrder] = useState("ASC");
  const [season, setSeason] = useState("Any");
  const [currentPage, setCurrentPage] = useState(1);

  const handleChange = (event) => {
    const { name, value, options, selectedIndex } = event.target;
    if (name === "Order") {
      setOrder(value);
      setOrderType(options[selectedIndex].id);
    }
    if (name === "Continent") {
      setContinent(value);
    }
    if (name === "searchBar") {
      setUserInput(value);
    }
    if (name === "Season") {
      setSeason(value);
    }
  };

  useEffect(() => {
    if (pathname.includes("/search")) {
      dispatch(addCountriesByName(userInput, continent, order, orderType));
    }
    if (pathname === "/home") {
      dispatch(addCountries(continent, order, orderType, currentPage, season));
    }
  }, [continent, order, orderType, currentPage, season]);

  const onSearch = () => {
    if (!userInput) {
      alert("The searchbar can't be empty");
    } else {
      dispatch(addCountriesByName(userInput, continent, order, orderType));
      navigate(`/search/${userInput}`);
    }
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="nav-bar">
      <button onClick={returnToHome}>Home</button>
      <h1>Countries SarruApp</h1>

      <Link to={"/createActivity"}>
        <button>Add Activity</button>
      </Link>

      <select name="Continent" onChange={handleChange}>
        <option value="All">All Continents</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <select name="Order" onChange={handleChange}>
        <option id="name" value="ASC">
          Alphabetic Up
        </option>
        <option id="name" value="DESC">
          Alphabetic Down
        </option>
        <option id="population" value="ASC">
          Population Up
        </option>
        <option id="population" value="DESC">
          Population Down
        </option>
      </select>

      <select name="Season" onChange={handleChange}>
        <option value="Any">Search Activities</option>
        <option value="All">All Seasons</option>
        <option id="Spring" value="Spring">
          Spring
        </option>
        <option id="Summer" value="Summer">
          Summer
        </option>
        <option id="Autumn" value="Autumn">
          Autumn
        </option>
        <option id="Winter" value="Winter">
          Winter
        </option>
      </select>

      <button onClick={goToPreviousPage} disabled={currentPage <= 1}>
        Previous Page
      </button>
      <span>Page number {currentPage}</span>
      <button onClick={goToNextPage} disabled={currentPage >= 24}>
        Next Page
      </button>
      <input
        name="searchBar"
        type="search"
        value={userInput}
        onChange={handleChange}
      />

      <button onClick={onSearch}>Search Countries</button>
    </div>
  );
};

export default NavBar;
