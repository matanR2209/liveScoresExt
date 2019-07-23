import React from 'react';
import './TeamLineup.scss';
import Player from '../../containers/Player/Player';

const TeamLineup = (props) => {
  const lineup = props.presentedTeam.lineup.map((player, index) => {
    return <Player key={index} player={player}/>
  });

  return (<div className="lineup-container">{lineup}</div>);
}


export default TeamLineup;
