import React from 'react';
import './Player.scss';
import soccer_avatar from '../../assets/images/soccer_avatar.png';


const Player = (props) => {
  return (
    <div className="player-container">
      <div className="player-image">
        <img src={soccer_avatar}/>
      </div>
      <div className="playerName">
        {props.stats.playerNumber}. {props.stats.playerName}
      </div>
      <div className="player-stats">
        <div className="top-row">
          <label>MP: 55 </label>
          <label>S: 6.8</label>
          </div>
        <div className="bottom-row">
          <label>APPS: {props.stats.appearances} </label>
          <label>G: 2</label>
        </div>
      </div>
    </div>
  );
}
export default Player;