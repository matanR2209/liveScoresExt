import React from 'react'
import './MatchStatsHeader.scss'

const MatchStatsHeader = (props) => {
  let matchStats = props.stats;
  return (
    <div className="main-stats">
      <div className="main-stats-container">
        <div className="home-team-header">
          <div className="team-name">{matchStats.localTeam.data.name}</div>
          <div className="team-logo"><img src={matchStats.localTeam.data.logo_path}/></div>
        </div>

        <div className="score">
          <div className="match-score">{matchStats.scores.localteam_score} - {matchStats.scores.visitorteam_score}</div>
          <div className="referee">{matchStats.referee.data.common_name}</div>
          <div className="stadium">{matchStats.venue.data.name}, {matchStats.venue.data.city}</div>
          <div className="weather">
            <img src={matchStats.weather_report.icon}/> {matchStats.weather_report.type}
          </div>
        </div>

        <div className="away-team-header">
          <div className="team-name">{matchStats.visitorTeam.data.name}</div>
          <div className="team-logo"><img src={matchStats.visitorTeam.data.logo_path}/></div>
        </div>
      </div>
      <div className="main-events">
        main events - goals, cards, substitutions
      </div>
    </div>
  );
}

export default MatchStatsHeader;
