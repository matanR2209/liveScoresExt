const emitter = require('./Emitter');
const Config = require('../env/Config');


module.exports = {
  getMatches: (cb) => {
    switch (Config.FILE_TYPE) {
      case 'csv': {
        break;
      }
      // case 'http' :
      //   transformHTTPToArray();
      //   return

        return;
      default:
        emitter.emit('matchesLoaded', []);
    }
  },
};


