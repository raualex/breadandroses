import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import LandingPage from '../Components/LandingPage';
import Nav from '../Components/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/welcome' render={() => (
          <div>
            <Nav />
          </div>
        )} />
        <Route exact path='/senate' render={() => (
          <div>
            <Nav />
          </div>
        )} />
        <Route exact path='/house' render={() => (
          <div>
            <Nav />
          </div>
        )} />
      </div>
    );
  }
}

export default withRouter(App);
