import React from 'react'

const SearchItem = ({searchReview, setSearchReview}) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input
            id='search'
            type='text'
            role='searchbox'
            placeholder='Search'
            onChange={(e) => setSearchReview(e.target.value)}
        ></input>


    </form>
  )
}

export default SearchItem