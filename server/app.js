const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors')

const Config = require('./env/Config');
const logger = require('./utils/Logger')

const matchesController = require('./controllers/matchesController');
const teamController = require('./controllers/teamController');
const playerController = require('./controllers/playerController');

app.use(cors())


app.get('/liveMatches', (req, res, next) => {
    matchesController.getLiveMatches((matchesList) => {
      res.send(matchesList);
      next()
      if(res.statusCode === 200) {
        logger.logResponse(req, JSON.stringify(matchesList));
      }else {
        console.log('error on response sending');
      }
    });
});

app.get('/teams/:teamId', (req, res) => {
  teamController.getTeam(req, res);
})

app.get('/player/:playerId', (req, res) => {
  playerController.getPlayerExtendedData(req, res);
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Games service is listening on port 4000 ')
});
