import React from 'react'
import Title from './NavbarComponents/Title'
import ItemActive from './NavbarComponents/ItemActive'
import NormalItem from './NavbarComponents/NormalItem'
import ItemDisabled from './NavbarComponents/ItemDisabled'
import ItemDropdown from './NavbarComponents/ItemDropdown'
import SearchForm from './NavbarComponents/SearchForm'

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