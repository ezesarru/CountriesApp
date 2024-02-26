import {
  ADD_COUNTRIES,
  ADD_COUNTRIES_BY_NAME,
  ADD_COUNTRY_BY_ID,
  ADD_COUNTRIES_TO_FORM,
  ACTIVITY_CREATION,
} from "./actionsTypes";

const initialState = {
  allCountries: [],
  selectedCountries: [],
  selectedCountry: [],
  formCountries: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
      };

    case ADD_COUNTRIES_BY_NAME:
      return {
        ...state,
        selectedCountries: payload,
      };

    case ADD_COUNTRY_BY_ID:
      return {
        ...state,
        selectedCountry: payload,
      };

    case ADD_COUNTRIES_TO_FORM:
      return {
        ...state,
        formCountries: payload,
      };

    case ACTIVITY_CREATION:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};

export default reducer;
