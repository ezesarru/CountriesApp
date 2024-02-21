//? Styles
import './Home.css'

//? Components
import Cards from '../Cards/Cards'

//? Imports
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

//? Redux
import { addCountries } from '../../redux/actionCreator'


const Home = () => {

    const dispatch = useDispatch()
    const [countries, setCountries] = useState([]) 
    const allCountries = useSelector((state) => state.allCountries)
    
    useEffect(() => {
        dispatch(addCountries())
    }, [])

    useEffect(() => {
        setCountries(allCountries)
    }, [allCountries])

    return(
        <div className='home'>
            <Cards countries={ countries } />
        </div>
    )
}

export default Home 