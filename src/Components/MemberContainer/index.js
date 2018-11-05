import React, { Component } from 'react';
import cardImages from '../../Utils/cardImages'
import stateList from '../../Utils/stateList'
import './MemberContainer.css'
import uuid from 'uuid';

class MemberContainer extends Component {
  constructor(props) {
    super();
  }

  handleChange = (event) => {
    let state = event.target.value
    this.props.filterState(state.slice(-2))
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
        <div>
          <h2>
            There are no congress people from your state in this committee
          </h2>
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
        <select 
          className="state-select"
          onChange={this.handleChange}
        >
          <option key="start" value="">--Select your state--</option>
          {
            stateList.map(state => {
              let stateName = Object.values(state)
              let stateKey = Object.keys(state)
              return (
                <option key={stateKey} value={stateName}>
                  {stateName}
                </option>
              )
            })
          }
        </select>
        <button
          className="reset-btn"
          onClick={this.props.resetFilter}
        >Reset State Filter</button>
      </div>
    )
  }
}

export default MemberContainer;