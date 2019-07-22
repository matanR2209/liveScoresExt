module.exports = class Team {
  constructor(team) {
    Object.assign(this, team);
    this.lineup = {};
    this.bench = {};
    this.GeneralSquad = {};

  }

  setMatchSquad(lineup, bench) {
    this.lineup = lineup;
    this.bench = bench;
  }

  setGeneralSquad(squad) {
    this.GeneralSquad = squad;
  }

};
