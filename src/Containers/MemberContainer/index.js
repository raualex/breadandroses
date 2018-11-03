import React from 'react';
import { connect } from 'react-redux';
import './MemberContainer.css'
import uuid from 'uuid';

const MemberContainer = (props) => {

  const members = props.senate.map((senator) => {
    return (
      <div key={uuid()} className="member">
        <ul className="member-list">
          <li>Name:</li>
          <li>{senator.name}</li>
          <li>Party:</li>
          <li>{senator.party}</li>
          <li>State:</li>
          <li>{senator.state}</li>
          <li>Official Website:</li>
          <li>{senator.website}</li>
          <li className={(senator.twitter ? 'show' : 'hidden')}>Twitter:</li>
          <li className={(senator.twitter ? 'show' : 'hidden')}>{senator.twitter}</li>
          <li className={(senator.facebook ? 'show' : 'hidden')}>Facebook:</li>
          <li className={(senator.facebook ? 'show' : 'hidden')}>{senator.facebook}</li>
          <li className={(senator.phone_number ? 'show' : 'hidden')}>Phone:</li>
          <li className={(senator.phone_number ? 'show' : 'hidden')}>{senator.phone_number}</li>
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
  senate: state.senateMembers
})

export default connect(mapStateToProps)(MemberContainer);