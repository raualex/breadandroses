import React from 'react';
import cardImages from '../../Utils/cardImages'
import './MemberContainer.css'
import uuid from 'uuid';

const MemberContainer = (props) => {

  let title;

  if (props.navClicked === 'senate') {
    title = <h1>Committee on Health, Education, Labor, and Pensions</h1>
  } else if (props.navClicked === 'house') {
    title = <h1>Committee on Education and the Workforce</h1>
  }

  const members = props.congress.map((person) => {
    
    return (
      <div key={uuid()} className={person.party}>
        <img 
          src={cardImages[person.name]} 
          alt={person.name} 
          className="politician"
        />
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
    <div>
      { title }
      <div className="members-container">
        { members }
      </div>
      <input type='dataset' />
    </div>
  )

}

export default MemberContainer;