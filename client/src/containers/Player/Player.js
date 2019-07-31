import React, { Component, Fragment } from 'react'
import './Player.scss';
import connect from 'react-redux/es/connect/connect'

const axios = require('axios');
const ACTIONS = require('../../store/actionTypes');


class Player extends Component {
  presentSelectedPlayer = () => {
    this.props.presentPlayerHandler(this.props.player);
    this.fetchPlayerExtendedData(this.props.player.player_id);
  }

  fetchPlayerExtendedData = (playerId) => {
    console.log('get data for player id: ' + playerId);
    axios.get("http://localhost:4000/players/" + playerId).then((response) => {
      console.log(response.data);
      this.props.setPlayerExtendedData(response.data.stats.data);
    });
  }

  render() {
    if(this.props.isStatsModal) {
      return <div className="player-container-row">
        <div className="player-name">
          {this.props.player.number}. {this.props.player.player_name}
        </div>
      </div>
    } else {
      return (
        <div className="player-container" onClick={() => this.presentSelectedPlayer(this.props.player)} >
          <div className="player-image">
            <img src={"https://cdn.sportmonks.com/images/soccer/players/1/455361.png"}></img>
          </div>
          <div className="player-name">
            {this.props.player.number}. {this.props.player.player_name}
          </div>
          <div className="player-stats">
            <label>Minutes played: {this.props.player.stats.other.minutes_played} </label>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    presentPlayerHandler :  (player) => {
      dispatch({
        type: ACTIONS.OPEN_MODAL,
        player: player
      });
    },
    setPlayerExtendedData :  (response) => {
      dispatch({
        type: ACTIONS.SET_PLAYER_DATA,
        data: response
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
