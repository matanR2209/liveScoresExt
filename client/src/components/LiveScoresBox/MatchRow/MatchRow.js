import React from 'react';
import './MatchRow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const MatchRow = (props) => {
  return (
    <tr className="match-row">
      <td className="team-name">{props.homeTeamName}</td>
      <td>{props.homeTeamScore}</td>
      <td> - </td>
      <td>{props.awayTeamScore}</td>
      <td className="team-name">{props.awayTeamName}</td>
      <td className="info" onClick={() => props.selectPresentedMatch(props.leagueId, props.matchDataId)} >
        <FontAwesomeIcon icon={faInfoCircle} />
      </td>
    </tr>
  );
}

export default MatchRow;
