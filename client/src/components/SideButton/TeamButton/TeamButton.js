import React from 'react';
import './TeamButton.scss';

const TeamButton = (props) => {
  return (
    <button onClick={props.action} className="team-side-button">
      <div>{props.label}</div>
      <div><img src={props.img}/></div>
    </button>
  );
}

export default TeamButton;
