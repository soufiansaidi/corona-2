import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/DataContext'

// import SearchIcon from './../Images/searchicon.svg'

const FilterForm = () => {
    const { dispatch } = useContext(DataContext)
    const [search, setSearch] = useState('')

    const _handleSearch = (val) => {
        setSearch(val)
        dispatch({type: "SEARCH", payload: search})
    }

    return (
        <div className="form-filter">
            <input type="text" className="search-filter" placeholder="ابحث عن البلد" onChange={(e) => _handleSearch(e.target.value)} value={search} />
            {/* <button onClick={ searchCountries }><img src={ SearchIcon } alt="Search icon" /></button> */}
        </div>
    )
}
export default FilterForm