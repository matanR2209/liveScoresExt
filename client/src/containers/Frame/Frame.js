import React, {Component} from 'react';
import { connect } from 'react-redux'

import './Frame.scss';
import SideButton from '../../components/SideButton/SideButton'
import TeamLineup from '../../components/TeamLineup/TeamLineup'
import StatsBox from '../../components/StatsBox/StatsBox'
import LiveScoreBox from '../../components/LiveScoresBox/LiveScoresBox'


class Frame extends Component {

  render() {
    return (
      <div>
        <div className="side-buttons">
          <div className="buttons-container">
            {determinateLiveGamesViability(this.props.state.isLiveGamesOpen)}
            {showTeamsButtons(this.props.state)}
            {determinateStatsViability(this.props.state)}
          </div>
        </div>
        <div className="bottom-frame">
          {teamLineupController(this.props.state)}
        </div>
      </div>
    )
  }

}

const determinateStatsViability = (tempState) => {
  // console.log(tempState.stats);
  if((tempState.stats.gameId) ) {
    if(tempState.isStatsOpen) {
      return <StatsBox/>
    }else {
      return <SideButton val={'stats'} label={"stats"}/>;
    }
  }
}

const determinateLiveGamesViability = (val) => {
  return val ? <LiveScoreBox/> : <SideButton val={'live'} label={'Live games'} />;
}

const showTeamsButtons = (tempState) => {
  return tempState.homeTeam.name && tempState.awayTeam.name ?
    (<div><SideButton val={'home'} label={tempState.homeTeam.name} /> <SideButton val={'away'} label={tempState.awayTeam.name} /></div>): ''
}

const teamLineupController = (tempState) => {
  // console.log(tempState);
  return tempState.selectedTeam.lineup && tempState.selectedTeam.lineup.starters ? <TeamLineup presentedTeam={tempState.selectedTeam}/>: '';
}


const mapStateToProps = state => {
  return {
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // updateDataPresentedHandler :  ()=> console.log('click'),
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Frame);