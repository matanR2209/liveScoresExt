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
            {this.liveGamesAndScoresButtonHandler(this.props.state.isLiveGamesOpen)}
            {/*{showTeamsButtons(this.props.state)}*/}
            {/*{determinateStatsViability(this.props.state)}*/}
          </div>
        </div>
        {/*<div className="bottom-frame">*/}
          {/*{teamLineupController(this.props.state)}*/}
        {/*</div>*/}
      </div>
    )
  }
  fetchLiveGames = () => {
    axios.get("http://localhost:4000/matches/ongoing").then((response) => {
      this.props.getLiveGamesHandler(response);
    })
  }

  liveGamesAndScoresButtonHandler = (val) => {
    return val ? <LiveScoreBox fetchMatch = {(matchId) => this.fetchMatchDataHandler (matchId)} /> : <SideButton val={'live'} label={'Live games'} action={() => this.fetchLiveGames()} />;
  }


  fetchMatchDataHandler = (matchId) => {
    axios.get("http://localhost:4000/match/" + matchId).then((response) => {
      console.log('get data for game: ' + matchId);
      this.props.getMatchInfoHandler(response);
    })
  }
}
// const showTeamsButtons = (tempState) => {
//   return tempState.homeTeam.name && tempState.awayTeam.name ?
//     (<div><SideButton val={'home'} label={tempState.homeTeam.name} /> <SideButton val={'away'} label={tempState.awayTeam.name} /></div>): ''
// }
//
// const teamLineupController = (tempState) => {
//   // console.log(tempState);
//   return tempState.selectedTeam.lineup && tempState.selectedTeam.lineup.starters ? <TeamLineup presentedTeam={tempState.selectedTeam}/>: '';
// }
//
// const determinateStatsViability = (tempState) => {
//   if((tempState.stats.gameId) ) {
//     if(tempState.isStatsOpen) {
//       return <StatsBox/>
//     }else {
//       return <SideButton val={'stats'} label={"stats"} />;
//     }
//   }
// }


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
    getMatchInfoHandler: (response) => {
      dispatch({
        type: 'GET_GAME_DATA',
        response: response.data
      });
    },
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Frame);
