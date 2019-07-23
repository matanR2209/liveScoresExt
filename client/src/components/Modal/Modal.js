import React, { Component, Fragment } from 'react'
import Modal from 'react-bootstrap/Modal';
import connect from 'react-redux/es/connect/connect'

import './Modal.scss';


class GeneralModal extends Component {
  render() {
    const player = this.props.state.selectedPlayer;
    console.log(player);
    return (
      <Modal show={this.props.state.isModalOpen}>
        <div className="modal-header">
          <div className="header-text">Player stats</div>
          <button onClick={() => this.props.closeModalHandler()}> X</button>
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
      </Modal>
    );
  }
}


const mapStateToProps = state => {
  return {
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModalHandler :  () => {
      dispatch({
        type: 'CLOSE_MODAL'
      });
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralModal);
