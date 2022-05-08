import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('Поиск... ')
  const [filter, setFilter] = useState()

  const handleChangeSearch = ({ target }) => {
    console.log(target.search)
    setSearch(target.search)
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        className="w-100 mx-auto"
        onChange={handleChangeSearch}
      />
    </div>
  )
}

// Search.propTypes = {
//   length: PropTypes.number.isRequired
// }

export default Search
