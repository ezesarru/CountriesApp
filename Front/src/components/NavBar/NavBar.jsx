//? Styles
import './NavBar.css'

//? Components
import SearchBar from '../SearchBar/SearchBar'

//? Hooks
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

//? Redux
import { addCountries } from '../../redux/actionCreator'


const NavBar = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const returnToHome = () => {
        dispatch(addCountries())
        navigate('/home')
    }

    return(
        <div className='nav-bar'>

            <h1>Countries SarruApp</h1>

            <Link to={'/createActivity'}>
                <button>Add Activity</button>
            </Link>

            <button onClick={ returnToHome }>Home</button>

            <SearchBar/>

        </div>
    )
}

export default NavBar