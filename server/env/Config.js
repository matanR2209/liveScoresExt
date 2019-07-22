module.exports = Object.freeze({
  FILE_TYPE: 'json',
  PLAYED_GAMES_FILE_NAME: 'result_played.csv',
  UPCOMING_GAMES_FILE_NAME: 'result_upcoming.csv',
  ONGOING_GAMES_FILE_NAME: 'result_ongoing.csv',

  LOGS: {
    RESPONSE_LOGGER_CONTROL: true,
    GENERAL_LOGS_FILE: 'general_logs.log',
    MORGAN_LOGS_FILE: 'morgan_logs.log',
  },

  DATA_ORIGIN_PARAMETERS: {
    teams: ['home_team', 'away_team'],
    tournament: ['tournament'],
    status: ['status'],
    kickoff: ['kickoff'],
    startTime: ['start_time'],
  },

  MESSAGES: {
    GAMES_ERROR: 'Error getting matches, please try again',
  },
});
