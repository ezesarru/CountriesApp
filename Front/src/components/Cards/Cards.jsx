//? Styles
import "./Cards.css";

//? Hooks
import React from "react";

//? Components
import Card from "../Card/Card";

const Cards = ({ countries }) => {
  return (
    <div className="cards-container">
      {countries.map(
        ({
          id,
          name,
          flag,
          continent,
          capital,
          subcontinent,
          area,
          population,
        }) => (
          <Card
            key={id}
            id={id}
            name={name}
            flag={flag}
            continent={continent}
            capital={capital}
            subcontinent={subcontinent}
            area={area}
            population={population}
          />
        )
      )}
    </div>
  );
};

export default Cards;
