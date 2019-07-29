import React from 'react'
import './PlayerStatBox.scss'

const StatBox = (props) => {
  return (
    <div className="stat-container">
      <div className="stat-name">{props.label}</div>
      <div>{props.value}</div>
    </div>
  );
}

export default StatBox;
