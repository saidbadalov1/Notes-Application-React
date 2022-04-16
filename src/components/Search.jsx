import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({setSearchText}) => {



  const handleSearch = (event) => {
    setSearchText(event)
  }

  return (
    <div  className='search'>
        <MdSearch className='search-icon' size='1.5em'/>
        <input onChange={(event) => handleSearch(event.target.value)} id='plc' placeholder='Search...' className='search-bar' type="text" ></input>
    </div>
  )
}

export default Search;