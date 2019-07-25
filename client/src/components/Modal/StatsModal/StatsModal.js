import React, { Fragment } from 'react'
import './StatsModal.scss';
import MatchStats from '../../MatchStats/MatchStats'
import MatchStatsHeader from '../../MatchStatsHeader/MatchStatsHeader'

const StatsModal = (props) => {
  return (
    <Fragment>
      <div className="modal-header">
        <div className="header-text">Match stats</div>
        <button onClick= {props.closeModal}> X</button>
      </div>
      <div className="modal-body">
        <div className="stats-header">
          <MatchStatsHeader stats={props.stats}/>
        </div>
        <div className="stats-body">
          <MatchStats homeTeam={props.stats.localTeam.data.id}
                      awayTeam={props.stats.visitorTeam.data.id}
                      stats={props.stats}/>
        </div>
      </div>
    </Fragment>
  );
}

export default StatsModal;
