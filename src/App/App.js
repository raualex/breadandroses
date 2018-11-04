import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from '../Components/LandingPage';
import Nav from '../Containers/Nav';
import MemberContainer from '../Components/MemberContainer';
import Loading from '../Components/Loading';
import './App.css';

export class App extends Component {
  constructor(props) {
    super();

    this.state = {
      navClicked: ''
    }
  }

  determineNavClicked = (event) => {
    this.setState({ navClicked: event.target.name })
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/welcome' render={() => (
          <div>
            <Nav navAssign={this.determineNavClicked} />
            <Loading />
          </div>
        )} />
        <Route exact path='/senate' render={() => (
          <div>
            <Nav navAssign={this.determineNavClicked} />
            <MemberContainer 
              congress={this.props.senate} 
              navClicked={this.state.navClicked} 
            />
          </div>
        )} />
        <Route exact path='/house' render={() => (
          <div>
            <Nav navAssign={this.determineNavClicked} />
            <MemberContainer 
              congress={this.props.house}
              navClicked={this.state.navClicked} 
            />
          </div>
        )} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  senate: state.senateMembers,
  house: state.houseMembers
})

export default withRouter(connect(mapStateToProps)(App));
