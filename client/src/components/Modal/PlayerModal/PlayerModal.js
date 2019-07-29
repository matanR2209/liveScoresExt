import React, { Fragment } from 'react'
import './PlayerModal.scss';
import PlayerStatBox from './PlayerStatBox/PlayerStatBox'
import Nav from 'react-bootstrap/Nav'
const _ = require('lodash');


const PlayerModal = (props) => {
  const player = props.selectedPlayer;
  const statsCollection = [
    {
      jsonValLocation: 'other.minutes_played',
      label: 'Minutes played',
      val: ''
    },
    {
      jsonValLocation: 'goals.scored',
      label: 'Goals',
      val: ''
    },
    {
      jsonValLocation: 'shots.x',
      label: 'Shots on goal',
      val: ''
    },
    {
      jsonValLocation: 'other.assists',
      label: 'Assists',
      val: ''
    },
    {
      jsonValLocation: 'other.offsides',
      label: 'Offsides',
      val: ''
    }
  ]

  const statsRowCollection = statsCollection.map((tempState ,index) => {
    return <PlayerStatBox key={index} label={tempState.label} value={_.get(player.stats,tempState.jsonValLocation)}/>
  })

  const tabs = props.tabs.map((tempTab, index) => {
    let isActive = tempTab.value === props.activeTab;
    return <Nav.Item key={index}>
      <Nav.Link active={isActive} onSelect={() => props.updatePlayerTab(tempTab.value)} eventKey={index}>{tempTab.label}</Nav.Link>
    </Nav.Item>
  });
  const setPlayerStatsContent= () => {
    switch (props.activeTab) {
      case 'season': {
        return <div>Season stats</div>
      }
      case 'history': {
        return <div>History stats</div>
      }
    }
  }

  const content = setPlayerStatsContent();
  return (
    <Fragment>
      <div className="modal-header">
        <div className="modal-title">
          <div className="header-text">Player stats</div>
          <button onClick= {props.closeModal}> X</button>
        </div>
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
      </div>
      <div className="modal-body">
        <div className="match-stats">
          {statsRowCollection}
        </div>

        <div className="tabs-container">
          <Nav variant="pills">
            {tabs}
          </Nav>
        </div>

        <div className="stats">
          {content}
        </div>
      </div>
    </Fragment>

  );
}

export default PlayerModal;
