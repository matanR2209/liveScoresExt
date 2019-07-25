import React, { Fragment } from 'react'
import StatRow from './StatRow/StatRow'

const _ = require('lodash');

const MatchStats = (props) => {
  console.log()
  let statsCollection = [
    {
      jsonValLocation: 'shots.total',
      label: 'Shots',
      homeVal: '',
      awayVal: ''
    },
    {
      jsonValLocation: 'shots.ongoal',
      label: 'Shots on target',
      homeVal: '',
      awayVal: ''
    },
    {
      jsonValLocation: 'possessiontime',
      label: 'Possession',
      homeVal: '',
      awayVal: ''
    },
    {
      jsonValLocation: 'passes.total',
      label: 'Passes',
      homeVal: '',
      awayVal: ''
    },
    {
      jsonValLocation: 'passes.percentage',
      label: 'Pass accuracy',
      homeVal: '',
      awayVal: ''
    },
    {
      jsonValLocation: 'fouls',
      label: 'Fouls',
      homeVal: '',
      awayVal: ''
    },
    {
      jsonValLocation: 'yellowcards',
      label: 'Yellow cards',
      homeVal: '',
      awayVal: ''
    },
    {
      jsonValLocation: 'redcards',
      label: 'Red cards',
      homeVal: '',
      awayVal: ''
    },
    {
      jsonValLocation: 'offsides',
      label: 'Offsides',
      homeVal: '',
      awayVal: ''
    },
    {
      jsonValLocation: 'corners',
      label: 'Corners',
      homeVal: '',
      awayVal: ''
    },
  ]

  let matchStats = props.stats;
  let homeValues = matchStats.stats.data[_.findIndex(matchStats.stats.data, {team_id: props.homeTeam})];
  let awayValues = matchStats.stats.data[_.findIndex(matchStats.stats.data, {team_id: props.awayTeam})];
  let statsRowsCollection = statsCollection.map((tempState ,index) => {
    return <StatRow key={index} homeVal={_.get(homeValues,tempState.jsonValLocation)}
                    awayVal={_.get(awayValues,tempState.jsonValLocation)}
                    statToDisplay={tempState.label} />
  })
  return (
    <Fragment>
      {statsRowsCollection}
    </Fragment>
  );
}

export default MatchStats;
