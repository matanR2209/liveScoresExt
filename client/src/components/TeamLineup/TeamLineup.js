import React, { Fragment } from 'react'
import './TeamLineup.scss';
import Player from '../../containers/Player/Player';

const TeamLineup = (props) => {
  const lineup = props.presentedTeam.lineup.map((player, index) => {
    return <Player key={index} player={player} isStatsModal={props.isStatsModal} />
  });
  if(props.isStatsModal) {
    const bench = props.presentedTeam.bench.map((player, index) => {
      return <Player key={index} player={player} isStatsModal={props.isStatsModal} />
    });
    return (<Fragment>
      <div className="stats-lineup-container">
        {lineup}
      </div>
      <div className="bench">Bench</div>
      <div className="bench-container">
        {bench}
      </div>
    </Fragment>)
  } else {
    return <div className="bottom-lineup-container">{lineup}</div>;
  }
}

export default TeamLineup;
