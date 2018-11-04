import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom'
import star from '../../Utils/Assets/Images/back_star.png';
import fist from '../../Utils/Assets/Images/power.svg';
import { connect } from 'react-redux';
import { fetchSenate } from '../../Thunks/fetchSenate';
import { fetchHouse } from '../../Thunks/fetchHouse';

export const Nav = (props) => {

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
          onClick={props.fetchSenate}
        >
          <button 
            className="senate-btn"
            name='senate'
            onClick={props.navAssign}
          >
            SENATE
          </button>
        </NavLink>
        <NavLink to='/house'
            name='house'
            className='house-link'
            onClick={props.fetchHouse}
        >
          <button 
            className="house-btn"
            name='house'
            onClick={props.navAssign}
          >
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

export const mapDispatchToProps = (dispatch) => ({
  fetchSenate: () => dispatch(fetchSenate()),
  fetchHouse: () => dispatch(fetchHouse())
})

export default connect(null, mapDispatchToProps)(Nav);
