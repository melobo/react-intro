import React from 'react'
import Title from './Navbar/Title'
import ItemDropdown from './Navbar/ItemDropdown'
import SearchForm from './Navbar/SearchForm'
import NavbarNavItem from './Navbar/NavbarNavItem'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
      <Title />
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
        <ul className='navbar-nav mr-auto'>
          <NavbarNavItem
            text='Home'
            to='/home'
            active
          />
          <NavbarNavItem
            text='Sign In'
            to='sign-in'
          />
          <ItemDropdown />
        </ul>
        <SearchForm />
      </div>
    </nav>
  )
}

export default Navbar