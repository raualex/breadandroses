import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import LandingPage from '../Components/LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
      </div>
    );
  }
}

export default withRouter(App);
