import React, { Fragment } from 'react'

import './PlayerModal.scss';


const PlayerModal = (props) => {
  const player = props.selectedPlayer;
  return (
    <Fragment>
      <div className="modal-header">
        <div className="header-text">Player stats</div>
        <button onClick= {props.closeModal}> X</button>
      </div>
      <div className="modal-body">
        <div className="player-info">
          <div className="info-container">
            <div className="general-info">
              <div className="player-name">{player.player_name}</div>
              <div className="player-team">Manchester city</div>
              <div className="player-position">Forward</div>
            </div>
            <div className="image-container">
              <img src={"https://cdn.sportmonks.com/images/soccer/players/1/455361.png"}></img>
            </div>
          </div>
        </div>
        <div className="match-stats">
          <div>
            <div>Minutes played</div>
            <div>{player.stats.other.minutes_played}</div>
          </div>

          <div>
            <div>Goals</div>
            <div>{player.stats.goals.scored}</div>
          </div>

          <div>
            <div>Assists</div>
            <div>{player.stats.other.assists}</div>
          </div>

          <div>
            <div>Offsides</div>
            <div>{player.stats.other.offsides}</div>
          </div>
        </div>
        <div className="season-stats">
          Season stats
        </div>
      </div>
    </Fragment>

  );
}

export default PlayerModal;
