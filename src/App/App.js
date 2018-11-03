import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from '../Components/LandingPage';
import Nav from '../Containers/Nav';
import MemberContainer from '../Containers/MemberContainer'
import './App.css';

class App extends Component {
  constructor(props) {
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
            <MemberContainer congress={this.props.senate}/>
          </div>
        )} />
        <Route exact path='/house' render={() => (
          <div>
            <Nav navAssign={this.assignClickedNavBtn} />
            <MemberContainer congress={this.props.house}/>
          </div>
        )} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  senate: state.senateMembers,
  house: state.houseMembers
})

export default withRouter(connect(mapStateToProps)(App));
