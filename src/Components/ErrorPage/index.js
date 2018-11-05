import React from 'react';
import './ErrorPage.css';

export const ErrorPage = () => {

  return (
    <div className="error-container">
      <h1 className="error-title">HALT</h1>
      <p className="error-msg">
        You are in error, comrade.  This page does not exist!
      </p>
    </div>
  )
}

export default ErrorPage;