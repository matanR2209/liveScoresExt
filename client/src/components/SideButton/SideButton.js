import React from 'react';
import './SideButton.scss';
import { FaChartBar } from 'react-icons/fa';

const SideButton = (props) => {
  const icon = props.label === 'stats'? <div><FaChartBar /></div>: ''
  return (
    <div className="side-button" onClick={props.action} >
      {icon}
      <div>{props.label}</div>
    </div>
  );
}

export default SideButton;
