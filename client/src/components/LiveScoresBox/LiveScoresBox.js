import React, { Fragment } from 'react'
import './LiveScoresBox.scss';
import connect from 'react-redux/es/connect/connect'

const axios = require('axios');

const LiveScoreBox = (props) => {
  const setLiveGamesByLeague = props.state.liveGames.map((league, leagueIndex) => {
      let games = league.matches.map((match, matchIndex) => {
        return <tr key={matchIndex+leagueIndex} className="match-row">
          <td className="teamName">{match.homeTeam.name}</td>
          <td>{match.matchData.scores.localteam_score}</td>
          <td> - </td>
          <td>{match.matchData.scores.visitorteam_score}</td>
          <td className="teamName">{match.awayTeam.name}</td>
          <td className="info" onClick={() => props.updatedPresentedMatch(league.leagueId, match.matchData.id)} >i</td>
        </tr>
      })
    return <Fragment key={leagueIndex}><tr className="league-name"><td colSpan={6}>{league.leagueName}</td></tr>{games}</Fragment>
  });
  const liveGames = setLiveGamesByLeague;
  return (
    <div className="live-games-container">
      <table><tbody>{liveGames}</tbody></table>
      <div className="close" onClick={() => props.updateLiveGamesHandler()} >X</div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveScoreBox);
