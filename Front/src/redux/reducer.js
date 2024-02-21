import { ADD_COUNTRIES, ADD_COUNTRIES_BY_NAME, ADD_COUNTRY_BY_ID } from './actionsTypes'

const initialState = {
    allCountries: [],
    selectedCountries: [],
    selectedCountry: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_COUNTRIES:
            return {
                ...state,
                allCountries: payload,
                selectedCountries: payload
            }

        case ADD_COUNTRIES_BY_NAME:
            return {
                ...state,
                selectedCountries: payload
            }

        case ADD_COUNTRY_BY_ID:
            return {
                ...state,
                selectedCountry: payload
            }
            
        default:
        return { ...state }
    }
}

export default reducer