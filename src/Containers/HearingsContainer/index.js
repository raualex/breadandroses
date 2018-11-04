import React from 'react';
import { connect } from 'react-redux';
import './HearingsContainer.css';

export const HearingsContainer = (props) => {
  let hearingsList;

  if (props.navClicked === 'senate' && props.senateHearings) {
    hearingsList = 
      props.senateHearings.map((meeting) => {
        return (
          <div>
            <p>{meeting.title}</p>
            <p>{meeting.url}</p>
          </div>
        )
      })
  } else if (props.navClicked === 'house' && props.houseHearings) {
    hearingsList = 
      props.houseHearings.map((meeting) => {
        return (
          <div>
            <p>{meeting.title}</p>
            <p>{meeting.url}</p>
          </div>
        )
      })
  } else {
    hearingsList = <div></div>
  }

  return (
    <div>
      { hearingsList }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  senateHearings: state.senateHearings,
  houseHearings: state.houseHearings
})

export default connect(mapStateToProps)(HearingsContainer);