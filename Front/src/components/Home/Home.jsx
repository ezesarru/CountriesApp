//? Styles
import './Home.css'

//? Components
import Cards from '../Cards/Cards'

//? Imports
import axios from 'axios'
import { useState, useEffect } from 'react'

const Home = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios('http://localhost:3001/countries')
                setCountries(data)
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])
    
    return(
        <div className='home'>
            <h1>Home</h1>
            <Cards countries={countries} />
        </div>
    )
}

export default Home 