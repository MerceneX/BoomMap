const NewsGuy = require("./news/NewsGuy");
const RoadConditionsGuy = require("./road-conditions/RoadConditionsGuy");

class ContentGuy {
	contructor() {}
	async getNews() {
		const nGuy = NewsGuy.getInstance();
		const response = await nGuy.getContent();
		return response;
	}

	async getRoadConditions() {
		const rcGuy = RoadConditionsGuy.getInstance();
		const response = await rcGuy.getContent();
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
