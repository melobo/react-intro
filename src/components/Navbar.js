import React from 'react'
import Title from './Navbar/Title'
import ItemActive from './Navbar/ItemActive'
import NormalItem from './Navbar/NormalItem'
import ItemDisabled from './Navbar/ItemDisabled'
import ItemDropdown from './Navbar/ItemDropdown'
import SearchForm from './Navbar/SearchForm'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <Title />
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
        <ul className='navbar-nav mr-auto'>
          <ItemActive />
          <NormalItem />
          <ItemDisabled />
          <ItemDropdown />
        </ul>
        <SearchForm />
      </div>
    </nav>
  )
}

export default Navbar