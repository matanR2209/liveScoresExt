import React from 'react';
import './SideButton.scss';
// import { faChartBar } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideButton = (props) => {
  // const icon = props.label === 'stats'? <div><FontAwesomeIcon icon={faChartBar}/></div>: ''
  const icon = '';
  return (
    <div className="side-button" onClick={props.action} >
      {icon}
      <div>{props.label}</div>
    </div>
  );
}

export default SideButton;
