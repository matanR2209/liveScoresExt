const _ = require('lodash');
const ACTIONS = require('../actionTypes');

const initialState = {
  homeTeam: {},
  awayTeam: {},
  stats: {},
  selectedTeam: {},
  selectedPlayer: {
    "team_id": 9,
    "fixture_id": 10333026,
    "player_id": 1359,
    "player_name": "Sergio Agüero",
    "number": 10,
    "position": "F",
    "additional_position": null,
    "formation_position": 10,
    "posx": 5,
    "posy": 3,
    "captain": false,
    "stats": {
      "shots": {
        "shots_total": 2,
        "shots_on_goal": 0
      },
      "goals": {
        "scored": 0,
        "assists": 0,
        "conceded": 0
      },
      "fouls": {
        "drawn": 1,
        "committed": 0
      },
      "cards": {
        "yellowcards": 0,
        "redcards": 0
      },
      "passing": {
        "total_crosses": 1,
        "crosses_accuracy": 0,
        "passes": 8,
        "passes_accuracy": 66,
        "key_passes": 0
      },
      "dribbles": {
        "attempts": 3,
        "success": 0,
        "dribbled_past": 0
      },
      "duels": {
        "total": 11,
        "won": 3
      },
      "other": {
        "assists": 0,
        "offsides": 0,
        "saves": 0,
        "inside_box_saves": 0,
        "pen_scored": 0,
        "pen_missed": 0,
        "pen_saved": 0,
        "pen_committed": 0,
        "pen_won": 0,
        "hit_woodwork": 0,
        "tackles": 0,
        "blocks": 1,
        "interceptions": 0,
        "clearances": 0,
        "dispossesed": 0,
        "minutes_played": 80
      }
    }
  },

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_GAME_DATA: return handleGameData(state, action);
    case ACTIONS.GET_LIVE_GAMES: return setLiveGames(state, action);
    case ACTIONS.SET_PRESENTED_TEAM: return setPresentedTeam( state, action );
    default: return state;
  }
}

const handleGameData = (state, action) => {
  let leagueId = action.data.leagueId;
  let matchId = action.data.matchId;
  let leagueIndex =  _.findIndex(state.liveGames, {leagueId: leagueId});
  let matchIndex = _.findIndex(state.liveGames[leagueIndex].matches, (tempMatch) => {
    return tempMatch.matchData.id === matchId;
  });
  let selectedMatch = state.liveGames[leagueIndex].matches[matchIndex];
  const newState = Object.assign({}, state);
  newState.homeTeam = selectedMatch.homeTeam;
  newState.awayTeam = selectedMatch.awayTeam;
  newState.stats = selectedMatch.matchData;
  newState.isLiveGamesOpen = false;
  return newState;
}

const setLiveGames = (state, action) => {
  const newState = Object.assign({}, state);
  newState.isLiveGamesOpen = true;
  newState.liveGames = action.response;
  return newState;
}

const setPresentedTeam = (state, action) => {
  const newState = Object.assign({}, state);
  if(action.val === 'home') {
    newState.selectedTeam = state.homeTeam;
  } else {
    newState.selectedTeam = state.awayTeam;
  }
  return newState;
}

export default reducer;
