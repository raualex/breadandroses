import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom'
import star from '../../Utils/Assets/Images/back_star.png';
import fist from '../../Utils/Assets/Images/power.svg';
import { connect } from 'react-redux';
import { fetchSenate } from '../../Thunks/fetchSenate';

const Nav = (props) => {

  const handleClick = (event) => {
    event.preventDefault()
    console.log(event.target)
    let { name } = event.target
    if (name === 'senate') {
      props.fetchSenate()
    } else if (name === 'house') {
      console.log(name)
    }
  }

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
          onClick={handleClick}
        >
          <button 
            className="senate-btn"
            name='senate'
          >
            SENATE
          </button>
        </NavLink>
        <NavLink to='/house'
            name='house'
            className='house-link'
        >
          <button 
            className="house-btn"
            name='house'
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

const mapDispatchToProps = (dispatch) => ({
  fetchSenate: () => dispatch(fetchSenate())
})

export default connect(null, mapDispatchToProps)(Nav);
