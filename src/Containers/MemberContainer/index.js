import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

const MemberContainer = (props) => {

  const members = props.senate.map((senator) => {
    return (
      <div key={uuid()} className="senateMember">
        <ul>
          <li>Name: {senator.name}</li>
          <li>Party: {senator.party}</li>
          <li>State: {senator.state}</li>
          <li>Official Website: {senator.website}</li>
          <li>Twitter: {senator.twitter}</li>
          <li>Facebook: {senator.facebook}</li>
          <li>Phone: {senator.phone_number}</li>
        </ul>
      </div>
    )
  })

  return (
    <div>
      { members }
    </div>
  )

}

const mapStateToProps = (state) => ({
  senate: state.senateMembers
})

export default connect(mapStateToProps)(MemberContainer);