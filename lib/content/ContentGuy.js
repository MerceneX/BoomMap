const NewsGuy = require("./news/NewsGuy");
const RoadConditionsGuy = require("./road-conditions/RoadConditionsGuy");
const TrafficForecastGuy = require("./traffic-forecast/TrafficForecastGuy");
const RoadEventsGuy = require("./road-events/RoadEventsGuy");
const BordersGuy = require("./borders/BordersGuy");

class ContentGuy {
	contructor() {}
	async getNews(options) {
		const nGuy = NewsGuy.getInstance();
		const response = await nGuy.getContent(options);
		return response;
	}

	async getRoadConditions(options) {
		const rcGuy = RoadConditionsGuy.getInstance();
		const response = await rcGuy.getContent(options);
		return response;
	}

	async getTrafficForecast() {
		const tfGuy = TrafficForecastGuy.getInstance();
		const response = await tfGuy.getContent();
		return response;
	}

	async getRoadEvents(options) {
		const reGuy = RoadEventsGuy.getInstance();
		const response = await reGuy.getContent(options);
		return response;
	}

	async getBordersStatus(options) {
		const bGuy = BordersGuy.getInstance();
		const response = await bGuy.getContent(options);
		return response;
	}
}

var getContentGuy = (function() {
	var instance;

	function createInstance() {
		var object = new ContentGuy("I am the instance");
		return object;
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
})();

module.exports = getContentGuy;
