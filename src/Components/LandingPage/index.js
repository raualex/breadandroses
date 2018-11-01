import React from 'react';
import './LandingPage.css';
import star from '../../Images/back_star.png';
import fist from '../../Images/power.svg';

export const LandingPage = () => {

  return (
    <div className="sun-container">
      <div className="sunburst"></div>
      <div className="outer">
        <b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b>
      </div>
      <div className="star-container">
        <img src={star} className="star" alt="star" />
        <img src={fist} className="fist" alt="fist" />
      </div>
      <div className="blue-foreground">
      <div className="blue-cover-layer">
      </div>
      </div>
    </div>
  )
}

export default LandingPage;