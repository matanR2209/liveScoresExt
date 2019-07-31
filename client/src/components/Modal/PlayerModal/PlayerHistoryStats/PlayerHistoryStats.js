import React from 'react'
import connect from 'react-redux/es/connect/connect'
import './PlayerHistoryStats.scss'

const PlayerHistoryStats = (props) => {
  console.log(props.state.selectedPlayer.seasons);
  const seasons = props.state.selectedPlayer.seasons;
  const headers = ['Season','G', 'A', 'MP', 'APP', 'STR', 'SUB IN', 'SUB OUT', 'BENCH', 'RED', 'YEC'];
  const ths = headers.map((header, index)=> {
    return <th key={index + 'h'}>{header}</th>
  })
  const data = seasons.map((season, index) => {
    return <tr key={index} >
        <td>{season.season_id}</td>
      <td>{season.goals}</td>
      <td>{season.assists}</td>
      <td>{season.minutes}</td>
      <td>{season.appearences}</td>
      <td>{season.lineups}</td>
      <td>{season.substitute_in}</td>
      <td>{season.substitute_out}</td>
      <td>{season.substitutes_on_bench}</td>
        <td>{season.redcards}</td>
        <td>{season.yellowcards}</td>
    </tr>
  });
  return (
    <table className="stats-table"><thead><tr>{ths}</tr></thead><tbody>{data}</tbody></table>
  );
}

const mapStateToProps = state => {
  return {
    state: state.statsReducer
  }
}

const mapDispatchToProps = dispatch => {
 return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerHistoryStats);

