const axios = require("axios");
const RoadEventsParser = require("./RoadEventsParser.js");

class RoadEventsGuy {
	constructor() {}
	async getContent() {
		let resp;
		try {
			const response = await axios.get(
				"http://www.promet.si/dc/PROMET.ROADEVENTS.PP.RSS.SL"
			);
			resp = response;
		} catch (error) {
			console.error(error);
		}
		let parser = new RoadEventsParser();
		const json = await parser.parseFeed(resp.data);
		return json;
	}
}

var getRoadEventsGuy = (function() {
	var instance;

	function createInstance() {
		var object = new RoadEventsGuy();
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

module.exports = getRoadEventsGuy;
