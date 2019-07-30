import React, { Component, Fragment } from 'react'
import './StatsModal.scss';
import Nav from 'react-bootstrap/Nav';

import connect from 'react-redux/es/connect/connect'
import MatchStats from '../../components/MatchStats/MatchStats';
import MatchStatsHeader from '../../components/MatchStatsHeader/MatchStatsHeader';
import TeamLineup from '../../components/TeamLineup/TeamLineup'
import Timeline from '../../components/Timeline/Timeline'

const ACTIONS = require('../../store/actionTypes');


class StatsModal extends Component {
  setContent = () => {
    const statsControl = this.props.statsControl;
    switch (this.props.modalState.statsModal.selectedTab.value) {
      case 'stats': {
        return   <MatchStats homeTeam={statsControl.stats.localTeam.data.id}
                             awayTeam={statsControl.stats.visitorTeam.data.id}
                             stats={statsControl.stats}/>
      }

      case 'lineups': {
        return <div className="lineups-container">
          <div className="lineup">
            <TeamLineup presentedTeam={statsControl.homeTeam} isStatsModal={true}/>
          </div>
          <div className="lineup">
            <TeamLineup presentedTeam={statsControl.awayTeam} isStatsModal={true}/>
          </div>
        </div>
      }
      case 'timeline': {
        return <Timeline events={statsControl.stats.comments.data}/>
      }
    }
  }
  render() {
    const content = this.setContent();
    const statsMdal = this.props.modalState.statsModal;
    const tabs = statsMdal.tabs.map((tempTab, index) => {
      let isActive = tempTab.value === statsMdal.selectedTab.value;
      return <Nav.Item key={index}>
        <Nav.Link active={isActive} onSelect={() => this.props.setTabValueHandler(tempTab.value)} eventKey={index}>{tempTab.label}</Nav.Link>
      </Nav.Item>
    });
    return (
      <Fragment>
        <div className="modal-header">
          <div className="modal-title">
            <div className="header-text">Match stats</div>
            <button onClick= {this.props.closeModal}> X</button>
          </div>
          <div className="stats-header">
            <MatchStatsHeader stats={this.props.statsControl.stats}/>
          </div>
        </div>
        <div className="nav-container">
          <Nav variant="pills">
            {tabs}
          </Nav>
        </div>
        <div className="modal-body">
          <div className="stats-body">
            <div className="content">
              {content}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalState: state.generalModalControl,
    statsControl: state.statsReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabValueHandler :  (val) => {
      dispatch({
        type: ACTIONS.SET_STATS_TABS_CONTENT,
        value: val
      });
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(StatsModal);
