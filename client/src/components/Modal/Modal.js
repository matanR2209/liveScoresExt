import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import connect from 'react-redux/es/connect/connect'

import './Modal.scss';
import PlayerModal from './PlayerModal/PlayerModal'
import StatsModal from '../../containers/StatsModal/StatsModal'


class GeneralModal extends Component {
  render() {
    let selectedModal = '';
    switch (this.props.state.modalContent) {
      case 'player': {
        selectedModal = <Modal c show={this.props.state.isModalOpen}>
          <PlayerModal selectedPlayer={this.props.state.selectedPlayer} closeModal={()=> this.props.closeModalHandler()}/>
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
