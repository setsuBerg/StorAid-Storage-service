import React from 'react'

export const SearchForm = () => {
  return (
    <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>

        <div className="search">
            <i className="fa-regular fa-magnifying-glass"></i>
        </div>
    </form>
  )
}
