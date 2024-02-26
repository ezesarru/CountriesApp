//? Styles
import "./NavBar.css";

//? Hooks
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

//? Redux
import { addCountries, addCountriesByName } from "../../redux/actionCreator";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const returnToHome = () => {
    navigate("/home");
  };

  const [userInput, setUserInput] = useState("");
  const [continent, setContinent] = useState("All");
  const [order, setOrder] = useState("ASC");
  const [orderType, setOrderType] = useState("name");

  const handleChange = (event) => {
    if (event.target.name === "Order") {
      setOrder(event.target.value);
      setOrderType(event.target.options[event.target.selectedIndex].id);
    }
    if (event.target.name === "Continent") {
      setContinent(event.target.value);
    }
    if (event.target.name === "searchBar") {
      setUserInput(event.target.value);
    }
  };

  useEffect(() => {
    if (pathname.includes("/search")) {
      dispatch(addCountriesByName(userInput, continent, order, orderType));
    }
    if (pathname === "/home") {
      const pageNumber = 1; //! PAGINADO!!!
      dispatch(addCountries(continent, order, orderType, pageNumber));
    }
  }, [continent, order, orderType]);

  const onSearch = () => {
    if (!userInput) {
      alert("The searchbar can't be empty");
    } else {
      dispatch(addCountriesByName(userInput, continent, order, orderType));
      navigate(`/search/${userInput}`);
    }
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

      <input
        name="searchBar"
        type="search"
        value={userInput}
        onChange={handleChange}
      />

      <button onClick={onSearch}>Search Countries</button>

      <button>1</button>
    </div>
  );
};

export default NavBar;
