//? Styles
import "./Card.css";

//? Hooks
import { Link } from "react-router-dom";

const Card = ({ id, name, flag, continent, capital, population }) => {
  return (
    <div className="card-container">
      <Link to={`/countries/${id}`}>
        <img src={flag} alt={name} />
      </Link>
      <h1>{name}</h1>
      <h3>Capital: {capital}</h3>
      <h3>Continent: {continent}</h3>
      <h3>Population: {population}</h3>
    </div>
  );
};

export default Card;
