//? Hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//? Utilities
import { validation } from "./validation";
import {
  activityCreation,
  addCountriesToForm,
} from "../../redux/actionCreator";

const Form = () => {
  const dispatch = useDispatch();
  const formCountries = useSelector((state) => state.formCountries);

  const [userData, setUserData] = useState({
    name: "",
    season: "",
    duration: "",
    difficulty: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(addCountriesToForm());
  }, []);

  const [errors, setErrors] = useState({
    name: "Your activity needs a name",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleCountryChange = (event) => {
    const selectedCountryId = event.target.value;
    setUserData({
      ...userData,
      countries: [...userData.countries, selectedCountryId],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(activityCreation(userData));
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <label>Name: </label>
        <br />
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        {errors && <p>{errors.name}</p>}

        <label>Season: </label>
        <br />
        <label>
          <input
            type="radio"
            name="season"
            value="Spring"
            onChange={handleChange}
          />
          🌼 Spring
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="season"
            value="Summer"
            onChange={handleChange}
          />
          ☀️ Summer
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="season"
            value="Autumn"
            onChange={handleChange}
          />
          🍁 Autumn
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="season"
            value="Winter"
            onChange={handleChange}
          />
          ❄️ Winter
        </label>
        <br />
        <br />

        <label>Duration: </label>
        <br />

        <select
          name="duration"
          onChange={handleChange}
          value={userData.duration}
        >
          <option value="">Choose!</option>
          <option value="1">One hour</option>
          <option value="2">Two hours</option>
          <option value="3">Three hours</option>
          <option value="4">Four hours</option>
          <option value="5">Five hours</option>
          <option value="6">Six hours</option>
        </select>
        <br />
        <br />

        <label>Difficulty: </label>
        <br />
        <label>
          <input
            type="radio"
            name="difficulty"
            value="1"
            onChange={handleChange}
          />
          1
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="difficulty"
            value="2"
            onChange={handleChange}
          />
          2
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="difficulty"
            value="3"
            onChange={handleChange}
          />
          3
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="difficulty"
            value="4"
            onChange={handleChange}
          />
          4
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="difficulty"
            value="5"
            onChange={handleChange}
          />
          5
        </label>
        <br />
        <br />

        <label>Countries: </label>
        <br />

        <select onChange={handleCountryChange}>
          <option>Multiple Choose!</option>
          {formCountries.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            );
          })}
        </select>

        <br />

        {userData.countries &&
          userData.countries.map((country) => {
            return <p key={country}>{country}</p>;
          })}
        <br />

        <button
          type="submit"
          disabled={
            errors.name ||
            !userData.season ||
            !userData.duration ||
            !userData.difficulty ||
            !userData.countries.length
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
