//? Styles
import './SearchBar.css'

//? Hooks
import { useState } from 'react'

const SearchBar = () => {

    const [id, setId] = useState('')

    const handleChange = (event) => {
        setId(event.target.value)
    }
    
    return(
        <div className='search-bar' >
            <input type="search" value={id} onChange={handleChange} />
            <button>Add Country</button>
            <h1>SearchBar</h1>
        </div>
    )
}

export default SearchBar 