import React from 'react';
import './LandingPage.css';
import star from '../../Images/back_star.png';
import fist from '../../Images/power.svg';

export const LandingPage = () => {

  return (
    <div className="sun-container">
      <div className="title-container">
        <h1 className="title-text">BREAD</h1>
        <h1 className="title-text">&</h1>
        <h1 className="title-text">ROSES</h1>
      </div>
      <div className="outer">
        <b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b>
      </div>
      <div className="star-container">
        <img src={star} className="star" alt="star" />
        <img src={fist} className="fist" alt="fist" />
      </div>
      <div className="back-foreground">
      <div className="back-cover-layer">
        <h2 className="subtitle">What is Congress Doing for You?</h2>
        <button></button>
      </div>
      </div>
    </div>
  )
}

export default LandingPage;