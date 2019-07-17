import React from 'react';
import './StatsBox.scss';
import connect from 'react-redux/es/connect/connect'

const StatsBox = (props) => {
  return (
    <div className="stats-container">
      <div className="team-logo">
        Home team logo
      </div>
      <table>
        <tbody>
        <tr>
          <td>{props.state.stats.home.score}</td>
          <th>Goals</th>
          <td>{props.state.stats.away.score}</td>
        </tr>

        <tr>
          <td>{props.state.stats.home.shots}</td>
          <th>Shots</th>
          <td>{props.state.stats.away.shots}</td>
        </tr>

        <tr>
          <td>{props.state.stats.home.yellowCards}</td>
          <th>Yellow cards</th>
          <td>{props.state.stats.away.yellowCards}</td>
        </tr>

        <tr>
          <td>{props.state.stats.home.redCards}</td>
          <th>Red cards</th>
          <td>{props.state.stats.away.redCards}</td>
        </tr>

        <tr>
          <td>{props.state.stats.home.corners}</td>
          <th>Corners</th>
          <td>{props.state.stats.away.corners}</td>
        </tr>

        <tr>
          <td>{props.state.stats.home.fouls}</td>
          <th>Fouls</th>
          <td>{props.state.stats.away.fouls}</td>
        </tr>

        <tr>
          <td>{props.state.stats.home.offsides}</td>
          <th>Offsides</th>
          <td>{props.state.stats.away.offsides}</td>
        </tr>

        <tr>
          <td>{props.state.stats.home.possession}%</td>
          <th>Possession</th>
          <td>{props.state.stats.away.possession}%%</td>
        </tr>

        <tr>
          <td>{props.state.stats.home.passAccuracy}%%</td>
          <th>Pass accuracy</th>
          <td>{props.state.stats.away.passAccuracy}%%</td>
        </tr>
        </tbody>

      </table>
      <div className="team-logo">
        Away team logo
      </div>
      <div className="close" onClick={() => props.updateStatsHandler()} >X</div>
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
    updateStatsHandler :  ()=> dispatch({type: 'UPDATE_STATS_VISIBILITY'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsBox);
