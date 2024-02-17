//? Styles
import './Detail.css'

//? Libraries
import axios from 'axios'

//? Hooks
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const { id } = useParams()

    const [country, setCountry] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios(`http://localhost:3001/countries/${id}`)

                if(data.id) {
                    setCountry(data)
                }

            } catch (error) {
                console.log(error)
            }
        })();
    }, [id])
    
    return(
        <div className='Detail'>

            <img src={country.flag} alt={country.name}/>
            <h1>{country.name}</h1>
            <h3>ID: {country.id}</h3>
            <h3>Capital: {country.capital}</h3>
            <h3>Population: {country.population}</h3>
            <h3>Area: {country.area}</h3>
            <h3>Continent: {country.continent}</h3>
            <h3>Subcontinent: {country.subcontinent}</h3>
            
        </div>
    )
}

export default Detail 