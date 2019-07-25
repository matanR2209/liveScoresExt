import React from 'react'
import './StatRow.scss'

const StatRow = (props) => {
  let stat = props.statToDisplay;
  let homeValue = props.homeVal;
  let awayValue = props.awayVal;
  return (
    <div className="state-container">
      <div> {homeValue} </div>
      <div className="stat-name"> {stat} </div>
      <div> {awayValue} </div>
    </div>
  );
}

export default StatRow;
