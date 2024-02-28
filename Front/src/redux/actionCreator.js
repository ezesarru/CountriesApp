import {
  ADD_COUNTRIES,
  ADD_COUNTRIES_BY_NAME,
  ADD_COUNTRIES_TO_FORM,
  ADD_COUNTRY_BY_ID,
  ACTIVITY_CREATION,
  ACTIVITY_SEARCH,
} from "./actionsTypes";
import axios from "axios";

export const addCountries = (
  continent,
  order,
  orderType,
  pageNumber,
  season
) => {
  // Home y NavBar
  return async (dispatch) => {
    try {
      const { data } = await axios(`http://localhost:3001/countries`, {
        params: {
          continent,
          order,
          orderType,
          pageNumber,
          season,
        },
      });

      return dispatch({
        type: ADD_COUNTRIES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addCountriesByName = (userInput, continent, order, orderType) => {
  // Search y NavBar
  return async (dispatch) => {
    try {
      const { data } = await axios(
        `http://localhost:3001/countries/search/?search=${userInput}`,
        {
          params: {
            continent,
            order,
            orderType,
          },
        }
      );

      if (Object.keys(data).length > 0) {
        return dispatch({
          type: ADD_COUNTRIES_BY_NAME,
          payload: data,
        });
      } else {
        alert("No countries match");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addCountryByID = (id) => {
  // Detail
  return async (dispatch) => {
    try {
      const { data } = await axios(`http://localhost:3001/countries/${id}`);

      return dispatch({
        type: ADD_COUNTRY_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const addCountriesToForm = () => {
  // Form
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/form");

      return dispatch({
        type: ADD_COUNTRIES_TO_FORM,
        payload: data,
      });
    } catch (error) {}
    console.log(error.message);
  };
};

export const activityCreation = ({
  countries,
  name,
  difficulty,
  season,
  duration,
}) => {
  // Form
  return async (dispatch) => {
    try {
      console.log(countries.join(" "));
      const { data } = await axios.post("http://localhost:3001/activities", {
        cca3: countries.join(" "),
        name,
        difficulty,
        season,
        duration: Number(duration),
      });

      return dispatch({
        type: ACTIVITY_CREATION,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const activitySearch = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("http://localhost:3001/activities");

      return dispatch({
        type: ACTIVITY_SEARCH,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
