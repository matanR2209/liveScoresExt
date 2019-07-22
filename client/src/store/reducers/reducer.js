const initialState = {
  homeTeam: {},
  awayTeam: {},
  selectedTeam: {},
  bottomVisibility: '',
  isStatsOpen: false,
  isLiveGamesOpen: false,
  stats: {},
  liveGames: []

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        // newState.homeTeam = action.response.teams.homeTeam.team;
        // newState.awayTeam = action.response.teams.awayTeam.team;
        // newState.stats = action.response.stats;
      }
      return newState;
    }
    case 'GET_LIVE_GAMES': {
      const newState = Object.assign({}, state);
      newState.isLiveGamesOpen = true;
      newState.liveGames = action.response;
      return newState;
    }
    default: {
      return state;
    }
  }
}
export default reducer;
