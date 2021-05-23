const NewsGuy = require('./news/NewsGuy');
const RoadConditionsGuy = require('./road-conditions/RoadConditionsGuy');
const TrafficForecastGuy = require('./traffic-forecast/TrafficForecastGuy');
const RoadEventsGuy = require('./road-events/RoadEventsGuy');
const BordersGuy = require('./borders/BordersGuy');
const BordersDAO = require('./borders/DAO/BordersDAO');
const UnitOfWork = require('./general/UnitOfWork');

class ContentGuy {
  contructor() {}
  async getNews(options) {
    return UnitOfWork.getNews(options);
  }

  async getRoadConditions(options) {
    return UnitOfWork.getRoadConditions(options);
  }

  async getTrafficForecast(options) {
    return UnitOfWork.getTrafficForecast(options);
  }

  async getRoadEvents(options) {
    return UnitOfWork.getRoadEvents(options);
  }

  async getBordersStatus(options) {
    return UnitOfWork.getBorders(options);
  }
}

var getContentGuy = (function () {
  var instance;

  function createInstance() {
    var object = new ContentGuy('I am the instance');
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

module.exports = getContentGuy;
