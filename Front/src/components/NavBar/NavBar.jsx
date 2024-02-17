//? Styles
import './NavBar.css'

//? Components
import SearchBar from '../SearchBar/SearchBar'

//? Hooks
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

    const navigate = useNavigate()

    const createActivity = () => {
        navigate('/createActivity')
    }

    return(
        <div className='nav-bar'>
            <h1>Countries SarruApp</h1>
            <button onClick={createActivity}>Add Activity</button>
            <h1>NavBar</h1>
            <SearchBar />
        </div>
    )
}

export default NavBar