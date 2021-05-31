const db = require('../../../../config/database');
const createPipeline = require('../../modules/createPipeline');

//DAO Pattern
class BordersDAO {
  constructor() {
    this.col = db.getDB().collection('borders');
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

  async updateDB(data) {
    this.saveToDB(data);
  }

  async getFromDB(options) {
    let cursor = this.col.aggregate(createPipeline(options));
    let docs = [];
    while (await cursor.hasNext()) {
      docs.push(await cursor.next());
    }
    return docs;
  }
}

// Singleton pattern
var getBordersDAO = (function () {
  var instance;

  function createInstance() {
    var object = new BordersDAO();
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

module.exports = getBordersDAO;
