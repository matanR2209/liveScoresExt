import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import connect from 'react-redux/es/connect/connect'

import './Modal.scss';
import PlayerModal from './PlayerModal/PlayerModal'
import StatsModal from '../../containers/StatsModal/StatsModal'

const ACTIONS = require('../../store/actionTypes');


class GeneralModal extends Component {
  render() {
    let selectedModal = '';
    switch (this.props.state.modalContent) {
      case 'player': {
        selectedModal = <Modal show={this.props.state.isModalOpen}>
          <PlayerModal tabs={this.props.state.playerModal.tabs}
                       activeTab={this.props.state.playerModal.selectedTab.value}
                       selectedPlayer={this.props.state.selectedPlayer}
                       updatePlayerTab={(selectedTab)=>this.props.updatePlayerModalContentHandler(selectedTab)}
                       closeModal={()=> this.props.closeModalHandler()}/>
        </Modal>;
        break;
      }
      case 'stats': {
        selectedModal = <Modal show={this.props.state.isModalOpen}>
          <StatsModal closeModal={()=> this.props.closeModalHandler()}/>
        </Modal>;
        break;
      }
    }
    return selectedModal;
  }
}


const mapStateToProps = state => {
  return {
    state: state.generalModalControl,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeModalHandler: () => {
      dispatch({
        type: ACTIONS.CLOSE_MODAL
      });
    },
    updatePlayerModalContentHandler: (selectedTab) => {
      dispatch({
        type: ACTIONS.SET_PLAYER_TABS_CONTENT,
        value: selectedTab
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralModal);
