const _ = require('lodash');
const SportmonksApi = require('sportmonks').SportmonksApi;
const Config = require('../env/Config');

const api = new SportmonksApi(Config.TOKEN);

const Team = require('../model/Team');
const League = require('../model/League');
const Match = require('../model/Match');


module.exports = {
  getLiveMatches: (cb) => {
    let gamesByLeagues = [];
    api.get('v2.0/livescores/now').then((response) => {
      let liveMatches = adjustLiveMatches(response);
      let matchesCreatedCounter = 0;
      let liveGamesCounter = liveMatches.data.length;
      liveMatches.data.forEach((tempMatch) => {
        // api.get('v2.0/leagues/{id}', {id: tempMatch.league_id}).then( (response) => {
        api.get('v2.0/leagues/{id}', {id: 271}).then( (response) => {
          tempMatch.league = response.data;
          addToLeague(tempMatch, gamesByLeagues);
          matchesCreatedCounter++;
          if (matchesCreatedCounter === liveGamesCounter) {
            cb(gamesByLeagues);
          }
        });
      });
    });
  },
};

addToLeague = (match, gamesByLeagues) => {
  const homeTeam = new Team(match.localTeam.data);
  const awayTeam = new Team(match.visitorTeam.data);
  let index = _.findIndex(gamesByLeagues, {leagueId: 271});
  // let index = _.findIndex(gamesByLeagues, {leagueId: match.league_id});
  if(index !== -1) {
    gamesByLeagues[index].matches.push(new Match(homeTeam, awayTeam, match));
  } else {
    let tempLeague = {
      leagueId: match.league.id,
      leagueName: match.league.name,
      matches: [new Match(homeTeam, awayTeam, match)]
    }
    gamesByLeagues.push(tempLeague);
  }
}

adjustLiveMatches = (response) => {
  if(response.data.length === 0) {
    return require('../data/matches/live_matches');
  }else {
    return response.data;
  }
}

