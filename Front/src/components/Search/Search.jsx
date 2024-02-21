//? Styles
import './Search.css'

//? Components
import Cards from '../Cards/Cards'

//? Imports
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

//? Redux
import { addCountriesByName } from '../../redux/actionCreator'


const Search = () => {

    const { userInput } = useParams()
    const dispatch = useDispatch()
    const [countries, setCountries] = useState([]) 
    const selectedCountries = useSelector((state) => state.selectedCountries)
    
    useEffect(() => {
        dispatch(addCountriesByName(userInput))
    }, [])

    useEffect(() => {
        setCountries(selectedCountries)
    }, [selectedCountries])
    
    return(
        <div className='search'>
            <Cards countries={ countries } />
        </div>
    )
}

export default Search 