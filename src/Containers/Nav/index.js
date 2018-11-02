import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom'
import star from '../../Utils/Assets/Images/back_star.png';
import fist from '../../Utils/Assets/Images/power.svg';
import { connect } from 'react-redux';

const Nav = (props) => {

  return (
    <div className="header-bar">
      <div className="nav-title-container">
        <h1 className="nav-title">BREAD</h1>
        <h1 className="nav-title">&</h1>
        <h1 className="nav-title">ROSES</h1>
      </div>
      <div className="btn-container">
        <NavLink to='/senate'
          name='senate'
          className='senate-link'
        >
          <button className="senate-btn">
            SENATE
          </button>
        </NavLink>
        <NavLink to='/house'
            name='house'
            className='house-link'
        >
          <button className="house-btn">
            HOUSE
          </button>
        </NavLink>
      </div>
      <div className="nav-star-container">
        <img src={star} className="nav-star" alt="star" />
        <img src={fist} className="nav-fist" alt="fist" />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  
}

export default connect(null, mapDispatchToProps)(Nav);
