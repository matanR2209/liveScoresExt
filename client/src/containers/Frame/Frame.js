import React, {Component} from 'react';
import { connect } from 'react-redux'

import './Frame.scss';

import SideButton from '../../components/SideButton/SideButton'
import TeamLineup from '../../components/TeamLineup/TeamLineup'
import StatsBox from '../../components/StatsBox/StatsBox'
import LiveScoreBox from '../../components/LiveScoresBox/LiveScoresBox'

const axios = require('axios');


class Frame extends Component {
  render() {
    return (
      <div>
        <div className="side-buttons">
          <div className="buttons-container">
            {this.liveGamesAndScoresButtonHandler()}
            {this.showTeamsButtonsHandler()}
          </div>
        </div>
        <div className="bottom-frame">
          {this.showTeamLineupHandler()}
        </div>
      </div>
    )
  }
  fetchLiveGames = () => {
    axios.get("http://localhost:4000/matches/ongoing").then((response) => {
      this.props.getLiveGamesHandler(response);
    })
  }

  liveGamesAndScoresButtonHandler = () => {
    return this.props.state.isLiveGamesOpen ? <LiveScoreBox
      updatedPresentedMatch = {(leagueId, matchId) => this.updatedPresentedMatchHandler(leagueId, matchId)} /> : <SideButton val={'live'} label={'Live games'} action={() => this.fetchLiveGames()} />;
  }

  updatedPresentedMatchHandler = (matchId, leagueId) => {
    this.props.getMatchInfoHandler(matchId, leagueId);
  }

  updateSelectedTeamHandler = (val) => {
    this.props.setPresentedTeamHandler(val);
  }
  showTeamsButtonsHandler = () => {
    return this.props.state.homeTeam.name && this.props.state.awayTeam.name ?
      (<div><SideButton action={() => this.updateSelectedTeamHandler('home')} label={this.props.state.homeTeam.name} img={this.props.state.homeTeam.logo_path} />
        <SideButton action={() => this.updateSelectedTeamHandler('away')} label={this.props.state.awayTeam.name} img={this.props.state.awayTeam.logo_path} />
      </div>): ''
  }
  showTeamLineupHandler = () => {
    return this.props.state.selectedTeam.lineup ? <TeamLineup presentedTeam={this.props.state.selectedTeam}/>: '';
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLiveGamesHandler :  (response) => {
      dispatch({
        type: 'GET_LIVE_GAMES',
        response: response.data
      });
    },
    getMatchInfoHandler: (leagueId, matchId) => {
      dispatch({
        type: 'GET_GAME_DATA',
        data: {
          leagueId: leagueId,
          matchId: matchId
        }
      });
    },
    setPresentedTeamHandler: (val) => {
      dispatch({
        type: 'SET_PRESENTED_TEAM',
        val: val
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
