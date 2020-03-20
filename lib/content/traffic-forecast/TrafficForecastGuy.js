const axios = require("axios");
const TrafficForecastParser = require("./TrafficForecastParser.js");

class TrafficForecastGuy {
	constructor() {}
	async getContent() {
		let resp;
		try {
			const response = await axios.get(
				"http://www.promet.si/portal/sl/Blog/RSS.aspx?p=87~299~-1"
			);
			resp = response;
		} catch (error) {
			console.error(error);
		}
		let parser = new TrafficForecastParser();
		const json = await parser.parseFeed(resp.data);
		return json;
	}
}

var getTrafficForecastGuy = (function() {
	var instance;

	function createInstance() {
		var object = new TrafficForecastGuy();
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

module.exports = getTrafficForecastGuy;
