import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from '../Components/LandingPage';
import Nav from '../Containers/Nav';
import MemberContainer from '../Components/MemberContainer';
import Loading from '../Components/Loading';
import { filterSenate } from '../Actions/senate-actions';
import { filterHouse } from '../Actions/house-actions';
import { fetchSenate } from '../Thunks/fetchSenate';
import { fetchHouse } from '../Thunks/fetchHouse';
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

  filterCongress = (state) => {
    let { navClicked } = this.state
    let { filterSenate, filterHouse } = this.props

    if (navClicked === 'senate') {
      filterSenate(state)
    } else if (navClicked === 'house') {
      filterHouse(state)
    }
  }

  resetCongress = () => {
    let { fetchSenate, fetchHouse } = this.props
    fetchSenate()
    fetchHouse()
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
              filterState={this.filterCongress} 
              resetFilter={this.resetCongress}
            />
          </div>
        )} />
        <Route exact path='/house' render={() => (
          <div>
            <Nav navAssign={this.determineNavClicked} />
            <MemberContainer 
              congress={this.props.house}
              navClicked={this.state.navClicked} 
              filterState={this.filterCongress}
              resetFilter={this.resetCongress}
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

export const mapDispatchToProps = (dispatch) => ({
  filterSenate: (state) => dispatch(filterSenate(state)),
  filterHouse: (state) => dispatch(filterHouse(state)),
  fetchSenate: () => dispatch(fetchSenate()),
  fetchHouse: () => dispatch(fetchHouse())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
