const ACTIONS = require('../actionTypes');

const initialState = {
  isLiveGamesOpen: false,
  liveGames: []
};

const liveMatchesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_LIVE_GAMES: return setLiveGames(action, state);
    case ACTIONS.CLOSE_LIVE_GAMES: return closeLiveGames(action, state);
    default: return state;
  }
}

const setLiveGames = (action, state) => {
  const newState = Object.assign({}, state);
  newState.isLiveGamesOpen = true;
  newState.liveGames = action.response;
  return newState;
}

const closeLiveGames = (action, state) => {
  const newState = Object.assign({}, state);
  newState.isLiveGamesOpen = false;
  return newState;
}

export default liveMatchesReducer;
