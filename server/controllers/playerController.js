const SportmonksApi = require('sportmonks').SportmonksApi;
const Config = require('../env/Config');

const api = new SportmonksApi(Config.TOKEN);
module.exports = {
  getPlayerExtendedData: (req, res) => {
    const playerId = req.params.playerId;
    api.get('v2.0/players/{id}', {id: playerId, stats: true}).then((response) => {
      let seasonsCounter = 0;
      let seasons = response.data.stats.data;
      let seasonsNumber = seasons.length
      seasons.forEach((season) => {
        console.log(season.season_id);
        // api.get('v2.0/seasons/{id}', {id: 271, league: true, goalscorers: true}).then((response) => {
        // });
      });
      res.send(response.data);
    });
  },
};
