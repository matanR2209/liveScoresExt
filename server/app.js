const express = require('express');
const app = express();
const fs = require('fs');
const logger = require('morgan');
const cors = require('cors')

const Config = require('./env/Config');
const routes = require('./routes/Routes');

const matchesController = require('./controllers/matchesController');
const teamController = require('./controllers/teamController');
const playerController = require('./controllers/playerController');

app.use(cors())


app.get('/liveMatches', (req, res) => {
    matchesController.getLiveMatches((matchesList) => {
      res.send(matchesList);
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
