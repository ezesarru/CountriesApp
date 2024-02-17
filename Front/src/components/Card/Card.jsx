//? Styles
import './Card.css'

//? Hooks
import { Link } from 'react-router-dom'

const Card = ({ id, name, flag, continent, capital, subcontinent, area, population }) => {

    return(
        <Link to={`/countries/${id}`}>
            <div>           
                <img src={flag} alt={name}/>
                <h1>{name}</h1>
                <h3>Capital: {capital}</h3>
                <h3>Continent: {continent}</h3>
                <h3>Population: {population}</h3>
                {/* <h2>{id}</h2>
                <h2>{subcontinent}</h2>
                <h2>{area}</h2> */}
            </div>
        </Link>
    )
}

export default Card