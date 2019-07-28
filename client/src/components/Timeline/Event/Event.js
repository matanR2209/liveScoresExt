import React, { Fragment } from 'react';
import './Event.scss';
const EVENTS = require('../EVENTS_TYPES');
const _ = require('lodash');


const Event = (props) => {
  let icon = '',name = '',minute = '',score = '',eventBody = '';
  const setEventValues = () => {
    switch (props.type) {
      case EVENTS.GOAL: {
        icon = 'GOAL icon';
        name = 'GGOOOAAAALLLLLL!!!!'
        score = <div className="score-container">score</div>
        eventBody = <Fragment>
          <div className="player-name">Player name</div>
          <div className='player-info'>Team #number</div>
        </Fragment>
        break;
      }
      case EVENTS.SUBSTITUTION: {
        icon = 'substitution icon';
        name = 'SUBSTITUTION'
        score = ''
        eventBody = <Fragment>
          <div className="in">
            <div className="in-header">
              IN
            </div>
            <div className="player-name">Player name</div>
            <div className='player-info'>Team #number</div>
          </div>
          <div className="out">
            <div className="out-header">
              OUT
            </div>
            <div className="player-name">Player name</div>
            <div className='player-info'>Team #number</div>
          </div>
        </Fragment>
        break;
      }
      case EVENTS.RED_CARD: {
        icon = 'red card icon';
        name = 'RED CARD'
        score = ''
        eventBody = <Fragment>
          <div className="player-name">Player name</div>
          <div className='player-info'>Team #number</div>
        </Fragment>
        break;
      }
    }
    minute = props.minute;
  }
  setEventValues();
  return (
    <div className="event-container">
      <div className="event-header">
        <div className="event-icon">{icon}</div>
        <div className="event-name">{name}</div>
        <div className="event-minute">{minute}</div>
        {score}
      </div>
      <div className="event-body">
        <div className="event-info">
          {eventBody}
        </div>
        <div className="team-logo">
          Team logo
        </div>
      </div>
    </div>
  );
}

export default Event;
