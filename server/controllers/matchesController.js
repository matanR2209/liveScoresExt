dataHandler = require('../utils/DataReadingHandler')
const Config = require('../env/Config');

module.exports = {
  getMatchesByStatus: (req, res) => {
    dataHandler.getMatches('matches', req.params.status, (matchesList) => {
      res.send(matchesList);
    });
  },
};
