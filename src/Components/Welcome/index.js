import React from 'react';
import rose from '../../Utils/Assets/Images/RoseSchneiderman.jpg';
import './Welcome.css';

export const Welcome = () => {

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">WELCOME TO <span>BREAD & ROSES</span></h1>
      <p className="welcome-body">Your one-stop-shop for government accountability for Laborers and the American Working Class.</p>
      <p className="welcome-body">Navigate above to see who is in your Senate and House Labor Committees and what they are doing for you.</p>
      <div>
        <img 
          src={rose} 
          alt="Rose Schneiderman portrait" 
          className="rose-pic" 
        />
        <p className="welcome-body">"The worker must have bread, but she must have roses, too." - Rose Schneiderman</p>
      </div>
    </div>
  )
}

export default Welcome;