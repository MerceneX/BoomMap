const axios = require("axios");
const RoadConditionsParser = require("./RoadConditionsParser.js");

class RoadConditionsGuy {
	constructor() {}
	async getContent() {
		let resp;
		try {
			const response = await axios.get(
				"http://www.promet.si/dc/PROMET.STANJE.PP.RSS.SL"
			);
			resp = response;
		} catch (error) {
			console.error(error);
		}
		let parser = new RoadConditionsParser();
		const json = await parser.parseFeed(resp.data);
		return json;
	}
}

var getRoadConditionsGuy = (function() {
	var instance;

	function createInstance() {
		var object = new RoadConditionsGuy();
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

module.exports = getRoadConditionsGuy;
