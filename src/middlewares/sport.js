const request = require('request');
const { Converter } = require('csvtojson');

const csvConverter = new Converter();

const FILE_PATH = 'http://www.football-data.co.uk/mmz4281/1718/I1.csv';

const get = async (req, res) => {
  try {
    const array = [];
    request.get(FILE_PATH).pipe(csvConverter).subscribe((jsonObj) => {
      array.push(jsonObj);
    }).on('done', () => {
      res.status(200).send(array[0]);
    });
  } catch (err) {
    console.log();
  }
};

const getBeat = async (req, res) => {
  try {
    const { commandName } = req.query;

    const array = [];
    request.get(FILE_PATH).pipe(csvConverter).subscribe((jsonObj) => {
      array.push(jsonObj);
    }).on('done', () => {
      const beatedGames = [];
      const teamGames = array.filter((item) => item.HomeTeam === commandName || item.AwayTeam === commandName);

      teamGames.forEach((item) => {
        if (item.HomeTeam === commandName && item.FTR === 'H') {
          beatedGames.push(item.AwayTeam);
        } else if (item.AwayTeam === commandName && item.FTR === 'A') {
          beatedGames.push(item.HomeTeam);
        }
      });
      res.status(200).send(beatedGames);
    });
  } catch (err) {
    console.log();
  }
};


module.exports = {
  get,
  getBeat,
};
