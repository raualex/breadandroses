import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom'
import star from '../../Utils/Assets/Images/back_star.png';
import fist from '../../Utils/Assets/Images/power.svg';

const Nav = () => {

  return (
    <div className="header-bar">
      <div className="nav-title-container">
        <h1 className="nav-title">BREAD</h1>
        <h1 className="nav-title">&</h1>
        <h1 className="nav-title">ROSES</h1>
      </div>
      <div className="btn-container">
        <button className="senate-btn">
          <NavLink to='/senate'
            name='senate'
            className='senate-link'
          >SENATE
          </NavLink>
        </button>
        <button className="house-btn">
          <NavLink to='/house'
            name='house'
            className='house-link'
          >HOUSE
          </NavLink>
        </button>
      </div>
      <div className="nav-star-container">
        <img src={star} className="nav-star" alt="star" />
        <img src={fist} className="nav-fist" alt="fist" />
      </div>
    </div>
  )
}

export default Nav;