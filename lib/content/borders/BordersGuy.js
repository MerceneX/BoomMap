const axios = require('axios');
const BordersParser = require('./BordersParser.js');
const db = require('../../../config/database');

class BordersGuy {
  constructor() {
    this.col = db.getDB().collection('borders');
  }
  async getContent(options) {
    this.updateDB();
    let json = {
      items: [await this.getFromDB(options)]
    };
    return json;
  }

  async getFromApi() {
    let resp;
    try {
      const response = await axios.get(
        'http://www.promet.si/dc/PROMET.BORDEREVENTS.PP.RSS.SL'
      );
      resp = response;
    } catch (error) {
      console.log(error);
    }
    return await new BordersParser().parseFeed(resp.data);
  }

  async saveToDB(json) {
    json.items.forEach(item => {
      this.col.updateOne(
        item,
        { $set: item },
        { upsert: true },
        function (err, r) {
          if (err) {
            console.log(err);
          }
        }
      );
    });
  }

  async updateDB() {
    this.saveToDB(await this.getFromApi());
  }

  async getFromDB(options) {
    let cursor = this.col.aggregate(this.createPipeline(options));
    let docs = [];
    while (await cursor.hasNext()) {
      docs.push(await cursor.next());
    }
    return docs;
  }
  createPipeline(options) {
    const match = {
      $and: [
        {
          $or: [
            {
              description: {
                $regex: options.term
              }
            },
            { location: { $regex: options.term } },
            {
              roadSection: {
                $regex: options.term
              }
            }
          ]
        },
        {
          datePublished: { $lte: options.dStart }
        },
        {
          datePublished: { $gte: options.dEnd }
        }
      ]
    };

    let pipeline = [
      {
        $match: match
      },
      { $sort: { [options.sort]: options.sortAscDesc } },
      { $project: { _id: 0 } },
      { $skip: options.skip },
      { $limit: options.limit }
    ];
    return pipeline;
  }
}
var getBordersGuy = (function () {
  var instance;

  function createInstance() {
    var object = new BordersGuy();
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

module.exports = getBordersGuy;
