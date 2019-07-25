import React, { Component, Fragment } from 'react'
import './StatsModal.scss';
import Nav from 'react-bootstrap/Nav';

import MatchStats from '../../components/MatchStats/MatchStats';
import MatchStatsHeader from '../../components/MatchStatsHeader/MatchStatsHeader';
import connect from 'react-redux/es/connect/connect'

class StatsModal extends Component {

  render() {
    const setContent = () => {
      switch (this.props.state.statsModal.selectedTab.value) {
        case 'stats': {
          return   <MatchStats homeTeam={this.props.state.stats.localTeam.data.id}
                               awayTeam={this.props.state.stats.visitorTeam.data.id}
                               stats={this.props.state.stats}/>
        }

        case 'lineups': {
          return   <div>lineups</div>
        }

        case 'timeline': {
          return   <div>timeline</div>
        }
      }
    }
    const content = setContent();
    const tabs = this.props.state.statsModal.tabs.map((tempTab, index) => {
      let isActive = tempTab.value === this.props.state.statsModal.selectedTab.value;
      return <Nav.Item key={index}>
                <Nav.Link active={isActive} onSelect={() =>  this.props.setTabValueHandler(tempTab.value)} eventKey={index}>{tempTab.label}</Nav.Link>
            </Nav.Item>
    })
    return (
      <Fragment>
        <div className="modal-header">
          <div className="header-text">Match stats</div>
          <button onClick= {this.props.closeModal}> X</button>
        </div>
        <div className="modal-body">
          <div className="stats-header">
            <MatchStatsHeader stats={this.props.state.stats}/>
          </div>
          <div className="stats-body">
            <Nav variant="pills">
              {tabs}
            </Nav>
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
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTabValueHandler :  (val) => {
      dispatch({
        type: 'SET_TABS_CONTENT',
        value: val
      });
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(StatsModal);
