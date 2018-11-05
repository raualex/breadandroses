import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LandingPage from '../Components/LandingPage';
import Nav from '../Containers/Nav';
import MemberContainer from '../Components/MemberContainer';
import Welcome from '../Components/Welcome';
import ErrorPage from '../Components/ErrorPage';
import HearingsContainer from '../Containers/HearingsContainer';
import { filterSenate } from '../Actions/senate-actions';
import { filterHouse } from '../Actions/house-actions';
import { fetchSenate } from '../Thunks/fetchSenate';
import { fetchHouse } from '../Thunks/fetchHouse';
import './App.css';

export class App extends Component {
  constructor(props) {
    super();
  }

  filterCongress = (state, navClicked) => {
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
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/welcome' render={() => (
            <div>
              <Nav />
              <Welcome />
            </div>
          )} />
          <Route exact path='/senate' render={() => (
            <div>
              <Nav />
              <MemberContainer 
                congress={this.props.senate} 
                navClicked={"senate"}
                filterState={this.filterCongress} 
                resetFilter={this.resetCongress}
              />
              <HearingsContainer navClicked={"senate"} />
            </div>
          )} />
          <Route exact path='/house' render={() => (
            <div>
              <Nav />
              <MemberContainer 
                congress={this.props.house}
                navClicked={"house"} 
                filterState={this.filterCongress}
                resetFilter={this.resetCongress}
              />
              <HearingsContainer navClicked={"house"} />
            </div>
          )} />
          <Route path='*' exact={true} component={ErrorPage} />
        </Switch>
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
