import React, { Component, Fragment } from 'react'
import './Player.scss';
import soccer_avatar from '../../assets/images/soccer_avatar.png';
import connect from 'react-redux/es/connect/connect'


class Player extends Component {
  playerSecondaryStats = () => {
    let firstState = '';
    let secState = '';
    const player = this.props.player;
    switch (player.position) {
      case 'G': {
        firstState = `Saves: ${player.stats.other.saves}`;
        secState = `Clearances: ${player.stats.other.clearances}`
        break;
      }
      case 'D': {
        firstState = `Duals: ${player.stats.duels.won}/${player.stats.duels.total}`;
        secState = `Tackles: ${player.stats.other.tackles}`
        break;
      }
      case 'M': {
        firstState = `Passes: ${player.stats.passing.passes}`
        secState = `passing accuracy: ${player.stats.passing.passes} %`
        break;
      }
      case 'F': {
        firstState = `Shots on target: ${player.stats.shots.shots_on_goal}/${player.stats.shots.shots_total}`
        secState = `dribbles: ${player.stats.dribbles.success}/${player.stats.dribbles.attempts}`
        break;
      }
    }
    return (
      <div className="bottom-row">
        <div>{firstState} </div>
        <div>{secState}</div>
      </div>
    );
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
        <div className="player-container" onClick={() => this.props.presentPlayerHandler(this.props.player)} >
          <div className="player-image">
            <img src={"https://cdn.sportmonks.com/images/soccer/players/1/455361.png"}></img>
          </div>
          <div className="player-name">
            {this.props.player.number}. {this.props.player.player_name}
          </div>
          <div className="player-stats">
            <div className="top-row">
              <label>Minutes played: {this.props.player.stats.other.minutes_played} </label>
            </div>
            {this.playerSecondaryStats()}
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
