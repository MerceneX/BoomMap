const BordersParser = require('./BordersParser.js');
const getFromApi = require('../modules/getFromAPI');

class BordersGuy {
  constructor(DAO) {
    // Dependency Injection Pattern
    this._DAO = DAO;
  }
  async getContent(options) {
    this._DAO.updateDB(
      await new BordersParser().parseFeed(
        await getFromApi(
          'http://www.promet.si/dc/PROMET.BORDEREVENTS.PP.RSS.SL'
        )
      )
    );
    let json = {
      items: [await this._DAO.getFromDB(options)]
    };
    return json;
  }
}

module.exports = BordersGuy;
