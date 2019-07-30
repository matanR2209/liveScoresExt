import React, { Component, Fragment } from 'react'
import './Player.scss';

import connect from 'react-redux/es/connect/connect'


class Player extends Component {
  render() {
    if(this.props.isStatsModal) {
      return <div className="player-container-row">
        <div className="player-name">
          {this.props.player.number}. {this.props.player.player_name}
        </div>
      </div>
    } else {
      return (
        <div className="player-container" onClick={() => this.props.presentPlayerHandler(this.props.player)} >
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
        type: 'OPEN_MODAL',
        player: player
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
