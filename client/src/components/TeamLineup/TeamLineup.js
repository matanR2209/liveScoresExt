import React from 'react';
import './TeamLineup.scss';
import Player from '../Player/Player';

const TeamLineup = (props) => {

  const lineup = props.presentedTeam.lineup.starters.map((player, index) => {
    return <Player key={index} stats={player}/>
  });

  return (<div className="lineup-container">{lineup}</div>);
}


export default TeamLineup;