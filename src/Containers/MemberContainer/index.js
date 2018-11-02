import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

const MemberContainer = (props) => {

  const members = props.senate.map((senator) => {
    return (
      <div key={uuid()} className="senateMember">
        <ul>
          <li>{senator.name}</li>
          <li>{senator.party}</li>
          <li>{senator.state}</li>
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