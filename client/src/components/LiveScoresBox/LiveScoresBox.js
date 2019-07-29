import React, { Fragment } from 'react'
import './LiveScoresBox.scss';
import connect from 'react-redux/es/connect/connect'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const LiveScoreBox = (props) => {
  const setLiveGamesByLeague = props.state.liveGames.map((league, leagueIndex) => {
      let games = league.matches.map((match, matchIndex) => {
        return <tr key={matchIndex+leagueIndex} className="match-row">
          <td className="team-name">{match.homeTeam.name}</td>
          <td>{match.matchData.scores.localteam_score}</td>
          <td> - </td>
          <td>{match.matchData.scores.visitorteam_score}</td>
          <td className="team-name">{match.awayTeam.name}</td>
          <td className="info" onClick={() => props.updatedPresentedMatch(league.leagueId, match.matchData.id)} >
            <FontAwesomeIcon icon={faInfoCircle} />
          </td>
        </tr>
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
    state: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateLiveGamesHandler :  () => {
      dispatch({
        type: 'CLOSE_LIVE_GAMES'
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveScoreBox);
