const Player = require('../model/Player');
const Team = require('../model/Team');

module.exports = class Match {
  constructor(homeTeam, awayTeam, matchData) {
    this.matchData = {};
    this.homeTeam = new Team(homeTeam);
    this.awayTeam = new Team(awayTeam);
    Object.assign(this.matchData, matchData);
    this.setLineups();
  }

  setLineups()  {
    let lineup = this.matchData.lineup.data;
    let bench = this.matchData.bench.data;
    let homeTeamId = this.homeTeam.id;
    let awayTeamId = this.awayTeam.id;
    let homeTeamLineup = [];
    let awayTeamLineup = [];
    let homeTeamBench  = [];
    let awayTeamBench  = [];
    lineup.forEach((player) => {
      if(player.team_id === awayTeamId) {
        awayTeamLineup.push(new Player(player));
      }
      if(player.team_id === homeTeamId) {
        homeTeamLineup.push(new Player(player));
      }
    });

    bench.forEach((player) => {
      if(player.team_id === awayTeamId) {
        awayTeamBench.push(new Player(player));
      }
      if(player.team_id === homeTeamId) {
        homeTeamBench.push(new Player(player));
      }
    });
    this.homeTeam.setMatchSquad(homeTeamLineup, homeTeamBench);
    this.awayTeam.setMatchSquad(awayTeamLineup, awayTeamBench);
  }
};
