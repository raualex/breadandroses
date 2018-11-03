import React from 'react';
import { connect } from 'react-redux';
import './MemberContainer.css'
import uuid from 'uuid';

const MemberContainer = (props) => {

  const members = props.congress.map((person) => {
    return (
      <div key={uuid()} className="member">
        <ul className="member-list">
          <li>Name:</li>
          <li>{person.name}</li>
          <li>Party:</li>
          <li>{person.party}</li>
          <li>State:</li>
          <li>{person.state}</li>
          <li>Official Website:</li>
          <li>{person.website}</li>
          <li className={(person.twitter ? 'show' : 'hidden')}>Twitter:</li>
          <li className={(person.twitter ? 'show' : 'hidden')}>{person.twitter}</li>
          <li className={(person.facebook ? 'show' : 'hidden')}>Facebook:</li>
          <li className={(person.facebook ? 'show' : 'hidden')}>{person.facebook}</li>
          <li className={(person.phone_number ? 'show' : 'hidden')}>Phone:</li>
          <li className={(person.phone_number ? 'show' : 'hidden')}>{person.phone_number}</li>
        </ul>
      </div>
    )
  })

  return (
    <div className="members-container">
      { members }
    </div>
  )

}

const mapStateToProps = (state) => ({
  senate: state.senateMembers,
  house: state.houseMembers
})

export default connect(mapStateToProps)(MemberContainer);