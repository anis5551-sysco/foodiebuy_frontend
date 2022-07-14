import React from 'react'

export default function Searchbar() {
  return (
    <div className="px-5">
        <form className="d-flex py-4 justify-content-center" role="search">
            <input className="form-control w-50" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-dark ms-2" type="submit">Search</button>
        </form>
    </div>
  )
}
