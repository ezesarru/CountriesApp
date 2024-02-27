//? Styles
import "./Detail.css";

//? Hooks
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//? Redux
import { addCountryByID } from "../../redux/actionCreator";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedCountry = useSelector((state) => state.selectedCountry);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    dispatch(addCountryByID(id));
  }, [id, dispatch]);

  useEffect(() => {
    setCountry(selectedCountry);
  }, [selectedCountry]);

  const returnToHome = () => {
    navigate("/home");
  };

  return (
    <div className="Detail">
      <button onClick={returnToHome}>Home</button>
      <h1>Countries SarruApp</h1>
      <img src={country.flag} alt={country.name} />
      <h1>{country.name}</h1>
      <h3>ID: {country.id}</h3>
      <h3>Capital: {country.capital}</h3>
      <h3>Population: {country.population}</h3>
      <h3>Area: {country.area}</h3>
      <h3>Continent: {country.continent}</h3>
      <h3>Subcontinent: {country.subcontinent}</h3>
    </div>
  );
};

export default Detail;
