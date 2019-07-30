import React, { Fragment } from 'react'
import './LiveScoresBox.scss';
import connect from 'react-redux/es/connect/connect'
import MatchRow from './MatchRow/MatchRow'

const ACTIONS = require('../../store/actionTypes');

const LiveScoreBox = (props) => {
  const setLiveGamesByLeague = props.state.liveGames.map((league, leagueIndex) => {
      let games = league.matches.map((match, matchIndex) => {
        return <MatchRow key={matchIndex+leagueIndex}
                         homeTeamName = {match.homeTeam.name}
                         homeTeamScore = {match.matchData.scores.localteam_score}
                         awayTeamScore = {match.matchData.scores.visitorteam_score}
                         awayTeamName = {match.awayTeam.name}
                         selectPresentedMatch = {() => props.updatedPresentedMatch(league.leagueId, match.matchData.id)}
        />
      })
    return <Fragment key={leagueIndex}><tr className="league-name"><td colSpan={6}>{league.leagueName}</td></tr>{games}</Fragment>
  });
  const liveGames = setLiveGamesByLeague;
  return (
    <div className="live-games-container">
      <div className="games-table-container">
        <table><tbody>{liveGames}</tbody></table>
      </div>
      <div className="stats-close" onClick={() => props.updateLiveGamesHandler()} >X</div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    state: state.liveMatches,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLiveGamesHandler :  () => {
      dispatch({
        type: ACTIONS.CLOSE_LIVE_GAMES
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveScoreBox);
