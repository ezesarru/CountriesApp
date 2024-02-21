import { ADD_COUNTRIES, ADD_COUNTRIES_BY_NAME, ADD_COUNTRY_BY_ID } from './actionsTypes'
import axios from 'axios'

export const addCountries = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios('http://localhost:3001/countries')

            return dispatch({
                type: ADD_COUNTRIES,
                payload: data
            })

        } catch(error) {
            console.log(error.message)
        }
    }
}

export const addCountriesByName = (userInput) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/countries/search/?search=${userInput}`)

            if(Object.keys(data).length > 0) {
                return dispatch({
                    type: ADD_COUNTRIES_BY_NAME,
                    payload: data
                })
            } 

            else {
                alert('No countries match')
            }

        } catch(error) {
            console.log(error.message)
        }
    }
}

export const addCountryByID = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/countries/${id}`)

            return dispatch({
                type: ADD_COUNTRY_BY_ID,
                payload: data
            })

        } catch(error) {
            console.log(error.message)
        }
    }
}