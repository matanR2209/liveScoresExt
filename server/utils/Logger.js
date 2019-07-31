const fs = require('fs');
const url = require('url');
const moment = require('moment');

const Config = require('../env/Config');
const LOGS_FOLDER = './logs/'

module.exports = {
  logResponse: (request, data) => {
    let fileName = request.url + moment().format('_DD.MM.YYYY') + '_logs.txt';
    if (fs.existsSync(LOGS_FOLDER + fileName)) {
      let loggedData = appendSeparator(data);
      fs.appendFile(LOGS_FOLDER + fileName, loggedData, function (err) {
        if (err) throw err;
        console.log('Logged to ' + fileName);
      });
    }else {
      fs.writeFile(LOGS_FOLDER + fileName, data + '\r\n', { flag: 'wx' }, function (err) {
        if (err) throw err;
        console.log("Created new logs file: " + fileName);
      });
    }
  },
};

appendSeparator = (data) => {
  const topSeperator = '====================== ' + moment().format('hh:mm:ss') + ' ======================\r\n'
  return topSeperator + data + '\r\n';
}
