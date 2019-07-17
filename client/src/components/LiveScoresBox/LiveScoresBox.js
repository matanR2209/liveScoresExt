import React from 'react';
import './LiveScoresBox.scss';
import connect from 'react-redux/es/connect/connect'
import { FaExclamation } from 'react-icons/fa';

const axios = require('axios');

const LiveScoreBox = (props) => {
  const liveGames = props.state.liveGames.map((league, leagueIndex) => {

    const leagueGames = league.games.map((game, gameIndex) => {
      return <tr className="game-container" key={gameIndex + leagueIndex}>
        <td>{game.homeTeam}</td>
        <td>{game.homeTeamScore}</td>
        <td>{game.m}</td>
        <td>{game.awayTeamScore}</td>
        <td>{game.awayTeam}</td>
        <td className="game-info"  onClick={() => props.getGameInfoHandler(game.gameId)}><FaExclamation/></td>
      </tr>
    });

    return (
      <div key={leagueIndex} className="league-container">
        <div className="league-header">{league.leagueName}</div>
        <div className="league-games-container"><table><tbody>{leagueGames}</tbody></table></div>
      </div>
    );
  });


  return (
    <div className="live-games-container">
        {liveGames}
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
  return {
    updateLiveGamesHandler :  ()=> dispatch({type: 'UPDATE_LIVE_GAMES_VISIBILITY'}),
    getGameInfoHandler: (val) => axios.get("http://localhost:8080/getGameData/", {params: {gameId: val}}).then(response => {
        dispatch({
          type: 'GET_GAME_DATA',
          response: response
        });
    })
    // getGameInfoHandler     :  (gameId)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiveScoreBox);
