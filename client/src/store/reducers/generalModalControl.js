const _ = require('lodash');
const ACTIONS = require('../actionTypes');

const initialState = {
  modalContent: '',
  isModalOpen: false,
  statsModal: {
    tabs: [
      {
        value: 'timeline',
        label: 'Timeline'
      },
      {
        value: 'lineups',
        label: 'Lineups'
      },
      {
        value: 'stats',
        label: 'Stats'
      },
    ],
    selectedTab: {value: 'stats'}
  },
  playerModal: {
    tabs: [
      {
        value: 'season',
        label: 'Season'
      },
      {
        value: 'history',
        label: 'History'
      },
    ],
    selectedTab: {value: 'season'}
  }
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.OPEN_MODAL: return openModal(state, action);
    case ACTIONS.CLOSE_MODAL: return closeModal(state);
    case ACTIONS.SET_STATS_TABS_CONTENT: return setStatsTabContent(state, action);
    case ACTIONS.SET_PLAYER_TABS_CONTENT: return setPlayerTabContent(state, action);
    default: return state;
  }
}

const openModal = (state, action) => {
  const newState = Object.assign({}, state);
  newState.isModalOpen = true;
  if(action.player) {
    newState.modalContent = 'player';
    newState.selectedPlayer = action.player;
  }
  else if(action.teamId) {
    newState.modalContent = 'team';
  }
  else if(action.stats) {
    newState.modalContent = 'stats';
  }
  return newState;
}

const closeModal = (state) => {
  const newState = Object.assign({}, state);
  newState.isModalOpen = false;
  return newState;
}

const setStatsTabContent = (state, action) => {
  const newState = Object.assign({}, state);
  newState.statsModal.selectedTab.value = action.value;
  return newState;
}

const setPlayerTabContent = (state, action) => {
  const newState = Object.assign({}, state);
  newState.playerModal.selectedTab.value = action.value;
  return newState;
}
export default modalReducer;
