import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <div className="header-bar">
      <button className="senate-btn">
        <NavLink to='/senate'
          name='senate'
        >SENATE
        </NavLink>
      </button>
      <button className="house-btn">
        <NavLink to='/house'
          name='house'
        >HOUSE
        </NavLink>
      </button>
    </div>
  )
}

export default Nav;