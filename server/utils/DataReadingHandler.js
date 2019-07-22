const Team = require('../model/Team');
const Match = require('../model/Match');
const _ = require('lodash');

const emitter = require('./Emitter');
const Config = require('../env/Config');

const liveMatches = require('../data/matches/live_matches')

module.exports = {
  getMatches: (searchBy, value, cb) => {
    switch (Config.FILE_TYPE) {
      case 'csv': {
        break;
      }
      // case 'http' :
      //   transformHTTPToArray();
      //   return
      case 'json':
        transformJSONToArray(cb);
        return;
      default:
        emitter.emit('matchesLoaded', []);
    }
  },
};

transformJSONToArray = (cb) => {
  let gamesByLeagues = [];
  liveMatches.data.forEach((match) => {
    const homeTeam = new Team(match.localTeam.data);
    const awayTeam = new Team(match.visitorTeam.data);
    let league = getLeagueData(match);
    match.league = league;
    index = _.findIndex(gamesByLeagues, {leagueId: match.league_id});
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
}

getLeagueData = (match) => {
  let league = require('../data/league/leauge');
  return league.data;
}


