import React from 'react';
import { connect } from 'react-redux';
import Loading from '../../Components/Loading';
import './HearingsContainer.css';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export const HearingsContainer = (props) => {
  let hearingsList;

  if (props.navClicked === 'senate' && props.senateHearings) {
    hearingsList = 
      props.senateHearings.map((meeting, index) => {
        if(index === props.senateHearings.length - 1) {
          return (
            <div key={uuid()} className="hearing-end">
              <p className="hearing-title">{meeting.title}</p>
              <p>{meeting.url}</p>
            </div>
          )
        } else {
          return (
            <div key={uuid()} className="hearing">
              <p className="hearing-title">{meeting.title}</p>
              <p>{meeting.url}</p>
            </div>
          )
        }
      })
  } else if (props.navClicked === 'house' && props.houseHearings) {
    hearingsList = 
      props.houseHearings.map((meeting, index) => {
        if (index === props.houseHearings.length - 1) {
          return (
            <div key={uuid()} className="hearing-end">
              <p className="hearing-title">{meeting.title}</p>
              <p><a href={meeting.url} target="_blank" rel="noopener noreferrer">{meeting.url}</a></p>
            </div>
          )
        } else {
          return (
            <div key={uuid()} className="hearing">
              <p className="hearing-title">{meeting.title}</p>
              <p><a href={meeting.url} target="_blank" rel="noopener noreferrer">{meeting.url}</a></p>
            </div>
          )
        }
      })
  } else {
    hearingsList = <Loading />
  }

  return (
    <div className="hearings-container">
      { hearingsList }
    </div>
  )
}

export const mapStateToProps = (state) => ({
  senateHearings: state.senateHearings,
  houseHearings: state.houseHearings
})

HearingsContainer.propTypes = {
  navClicked: PropTypes.string
}

export default connect(mapStateToProps)(HearingsContainer);