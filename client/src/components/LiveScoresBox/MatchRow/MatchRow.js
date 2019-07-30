import React from 'react';
import './MatchRow.scss';
import { FaInfoCircle } from 'react-icons/fa';


const MatchRow = (props) => {
  return (
    <tr className="match-row">
      <td className="team-name">{props.homeTeamName}</td>
      <td>{props.homeTeamScore}</td>
      <td> - </td>
      <td>{props.awayTeamScore}</td>
      <td className="team-name">{props.awayTeamName}</td>
      <td className="info" onClick={() => props.selectPresentedMatch(props.leagueId, props.matchDataId)} >
        <FaInfoCircle/>
      </td>
    </tr>
  );
}

export default MatchRow;
