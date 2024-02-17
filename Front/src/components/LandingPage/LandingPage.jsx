//? Styles
import './LandingPage.css'

//? Hooks
import { Link } from "react-router-dom"

const LandingPage = () => {

    return(
        <div className='landing-page'>
            <Link to='/home' >
                <button className='play-button'>¡PLAY!</button>
            </Link>
        </div>
    )
}

export default LandingPage 