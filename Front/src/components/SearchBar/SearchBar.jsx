//? Styles
import './SearchBar.css'

//? Hooks
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

//? Redux
import { addCountriesByName } from '../../redux/actionCreator'


const SearchBar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userInput, setUserInput] = useState('')

    const handleChange = (event) => {
        setUserInput(event.target.value)
    }

    const onSearch = () => {
        if(!userInput){
            alert("The search bar can't be empty")
        } else {
            dispatch(addCountriesByName(userInput))
            navigate(`/search/${userInput}`)
        }
    }

    return(
        <div className='search-bar' >

            <input type="search" value={ userInput } onChange={ handleChange }/>

            <button onClick={ onSearch }>Search Countries</button>
            
        </div>
    )
}

export default SearchBar 