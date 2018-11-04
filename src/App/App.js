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
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/welcome' render={() => (
          <div>
            <Nav />
            <Loading />
          </div>
        )} />
        <Route exact path='/senate' render={() => (
          <div>
            <Nav />
            <MemberContainer congress={this.props.senate}/>
          </div>
        )} />
        <Route exact path='/house' render={() => (
          <div>
            <Nav />
            <MemberContainer congress={this.props.house}/>
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
