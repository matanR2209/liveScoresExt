const redux = require('client/src/redux');
const createStore = redux.createStore;
const PLAYER_IMAGE = "../../assets/images/soccer_avatar.png";

const initialState = {
  homeTeam: {
    'name': "home team",
    lineup: {
      starters: [
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
      ],
      bench: [
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
      ]
    }
  },
  awayTeam: {
    'name': "away team",
    lineup: {
      starters: [
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
      ],
      bench: [
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
      ]
    }
  },
  selectedTeam: {
    'name': "away team",
    lineup: {
      starters: [
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
      ],
      bench: [
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
        {playerName: nameGen(3), playerImage: PLAYER_IMAGE, playerNumber: numberGen(), appearances: numberGen()},
      ]
    }
  },
  bottomVisibility: '',
  isStatsOpen: false,
  isLiveGamesOpen: true
};

// Reducer
const rootReducer = (state = initialState, action) => {
  if(action.type === 'add') {
    return {
      ...state,
      counter: state.counter + 10
    }
  }
  return state;
};

//Store
const store = createStore(rootReducer);

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

// Subscription
store.subscribe(()=> {
  // console.log(store.getState);
});
