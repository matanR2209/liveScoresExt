const _ = require('lodash');

const Config = require('../env/Config');

const Team = require('../model/Team');
const Tournament = require('../model/Tournament');
const Match = require('../model/Match');


module.exports = {
  getLiveMatches: (cb) => {
    let gamesByLeagues = [];
    const liveMatches = require('../data/matches/live_matches')
    liveMatches.data.forEach((match) => {
      const homeTeam = new Team(match.localTeam.data);
      const awayTeam = new Team(match.visitorTeam.data);
      let league = getLeagueData(match);
      match.league = new Tournament(league);
      let index = _.findIndex(gamesByLeagues, {leagueId: match.league_id});
      if(index !== -1) {
        gamesByLeagues[index].matches.push(new Match(homeTeam, awayTeam, match));
      } else {
        let tempLeague = {
          leagueId: league.id,
          leagueName: league.name,
          matches: [new Match(homeTeam, awayTeam, match)]
        }
        gamesByLeagues.push(tempLeague);
      }
    });
    cb(gamesByLeagues);
  },
};

getLeagueData = (match) => {
  let league = require('../data/league/leauge');
  return league.data;
}
