import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import LandingPage from '../Components/LandingPage';
import Nav from '../Containers/Nav';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      navClicked: ''
    }
  }

  assignClickedNavBtn = (str) => {
    this.setState({ navClicked: str })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/welcome' render={() => (
          <div>
            <Nav navAssign={this.assignClickedNavBtn} />
          </div>
        )} />
        <Route exact path='/senate' render={() => (
          <div>
            <Nav navAssign={this.assignClickedNavBtn} />
          </div>
        )} />
        <Route exact path='/house' render={() => (
          <div>
            <Nav navAssign={this.assignClickedNavBtn} />
          </div>
        )} />
      </div>
    );
  }
}

export default withRouter(App);
