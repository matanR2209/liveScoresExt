const PLAYER_IMAGE = "x";
const axios = require('axios');


const initialState = {
  homeTeam: {},
  awayTeam: {},
  selectedTeam: {},
  bottomVisibility: '',
  isStatsOpen: false,
  isLiveGamesOpen: false,
  stats: {},
  liveGames: [
    {
      gameId: 1,
      homeTeam: 'Team A home',
      homeTeamScore: '0',
      awayTeam: 'Team A away',
      awayTeamScore: '2',
      m: '55\''
    },
    {
      gameId: 2,
      homeTeam: 'Team B home',
      homeTeamScore: '4',
      awayTeam: 'Team B away',
      awayTeamScore: '1',
      m: '85\''
    },
    {
      gameId: 3,
      homeTeam: 'Team C home',
      homeTeamScore: '3',
      awayTeam: 'Team C away',
      awayTeamScore: '2',
      m: '75\''
    }
  ]

};

function nameGen(len) {
  var text = "";

  var charset = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
}

function numberGen() {
  return  Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PRESENTED_TEAM': {
      const newState = Object.assign({}, state);
      newState.selectedTeam = action.response.data.team;
      return newState;
    }
    case 'UPDATE_STATS_VISIBILITY': {
      const newState = Object.assign({}, state);
      if(action.response) {
        newState.stats = action.response.data;
      }
      newState.isStatsOpen = !state.isStatsOpen;
      if(newState.isStatsOpen){
        newState.isLiveGamesOpen = false;
      }
      return newState;
    }
    case 'UPDATE_LIVE_GAMES_VISIBILITY': {
      const newState = Object.assign({}, state);
      if(action.response) {
        newState.liveGames = action.response.data;
      }
      newState.isLiveGamesOpen = !state.isLiveGamesOpen;
      if(newState.isLiveGamesOpen) {
        newState.isStatsOpen = false;
      }
      return newState;
    }
    case 'GET_GAME_DATA': {
      const newState = Object.assign({}, state);
      if(action.response) {
        newState.isLiveGamesOpen = !state.isLiveGamesOpen;
        newState.homeTeam = action.response.data.teams.homeTeam.team;
        newState.awayTeam = action.response.data.teams.awayTeam.team;
        newState.stats = action.response.data.stats;
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}
export default reducer;
