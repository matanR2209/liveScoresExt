import React from 'react';
import './SideButton.scss';

const SideButton = (props) => {
  return (
    <button onClick={props.action} >
      <div>{props.label}</div>
    </button>
  );
}

export default SideButton;
