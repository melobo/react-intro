
import React from 'react'

function NavbarNavItem(props) {
  return (
    <li className='nav-item active'>
      <a className='nav-link' href={props.to}>{props.text}<span className='sr-only'>(current)</span></a>
    </li>
  )
}

export default NavbarNavItem
