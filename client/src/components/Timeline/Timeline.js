import React, { Fragment } from 'react';
import Event from './Event/Event';
const EVENTS = require('./EVENTS_TYPES');
const _ = require('lodash');

const Timeline = (props) => {
  props.events.map((event, index)=> {

  });
  return (
    <div>
      <Event type={EVENTS.GOAL} minute={60}/>
      <Event type={EVENTS.SUBSTITUTION} minute={60}/>
      <Event type={EVENTS.RED_CARD} minute={60}/>
    </div>
  );
}

export default Timeline;
