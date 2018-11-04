import React from 'react';
import star from '../../Utils/Assets/Images/back_star.png';
import fist from '../../Utils/Assets/Images/power.svg';
import './Loading.css';

const Loading = () => {

  return (
    <div className="sun-container2">
      <div className="star-container2">
        <img src={star} className="star2" alt="star" />
        <img src={fist} className="fist2" alt="fist" />
      </div>
    </div>
  )
}

export default Loading;