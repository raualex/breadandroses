import React, { Component } from 'react';
import cardImages from '../../Utils/cardImages';
import { senateStates, houseStates } from '../../Utils/stateList';
import Loading from '../Loading';
import './MemberContainer.css';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class MemberContainer extends Component {
  constructor(props) {
    super();

    this.state = {
      select: ''
    }
  }

  createStateList = () => {
    let stateList;
    const { navClicked } = this.props

    if (navClicked === 'senate') {
      stateList = senateStates
    } else if (navClicked === 'house') {
      stateList = houseStates
    }


    return stateList.map(state => {
      let stateName = Object.values(state)
      let stateKey = Object.keys(state)
      return (
        <option key={stateKey} value={stateKey}>
          {stateName}
        </option>
      )
    })
  }

  handleChange = (event) => {
    let state = event.target.value
   
    if (this.state.select === '') {
      this.setState({ select: state }, () => this.props.filterState(state, this.props.navClicked))
    } else {
      return
    }
  }

  handleReset = (event) => {
    event.preventDefault()
    this.setState({ select: '' }, () => this.props.resetFilter())
  }

  render() {
    const { navClicked, congress } = this.props
    let title;
    let members;

    if (navClicked === 'senate') {
      title = <h1 className="committee-title">Committee on Health, Education, Labor, and Pensions</h1>
    } else if (navClicked === 'house') {
      title = <h1 className="committee-title">Committee on Education and the Workforce</h1>
    }

    if (!congress.length) {
      members =
        <div className="loading-container">
          <Loading />
        </div>
    } else {    
      members = congress.map((person) => {
 
        return (
          <div key={uuid()} className={person.party}>
            <img 
              src={cardImages[person.name]} 
              alt={person.name} 
              className="politician"
            />
            <div className="member-details">
              <ul className="member-list">
                <li className="label">Name:</li>
                <li>{person.name}</li>
                <li className="label">Party:</li>
                <li>{person.party}</li>
                <li className="label">State:</li>
                <li>{person.state}</li>
                <li className="label">Official Website:</li>
                <li><a href={person.website} target="_blank" rel="noopener noreferrer">{person.website}</a></li>
                <li className={(person.twitter ? 'label' : 'hidden')}>Twitter:</li>
                <li className={(person.twitter ? 'show' : 'hidden')}>{person.twitter}</li>
                <li className={(person.facebook ? 'label' : 'hidden')}>Facebook:</li>
                <li className={(person.facebook ? 'show' : 'hidden')}>{person.facebook}</li>
                <li className={(person.phone_number ? 'label' : 'hidden')}>Phone:</li>
                <li className={(person.phone_number ? 'show' : 'hidden')}>{person.phone_number}</li>
              </ul>
            </div>
          </div>
        )
      })
    }

    return (
      <div>
        { title }
        <div className="members-container">
          { members }
        </div>
        <form 
          className="state-filter-container">
          <select 
            className="state-select"
            onChange={this.handleChange}
            value={this.state.select}
          >
            <option 
              key="start" 
              value=""
            >--Select your state--
            </option>
            { this.createStateList() }
          </select>
          <button
            className="reset-btn"
            onClick={this.handleReset}
          >Reset State Filter</button>
        </form>
      </div>
    )
  }
}

MemberContainer.propTypes = {
  congress: PropTypes.array,
  navClicked: PropTypes.string,
  filterState: PropTypes.func,
  resetFilter: PropTypes.func
}

export default MemberContainer;