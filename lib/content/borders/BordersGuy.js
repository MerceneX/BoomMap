const axios = require("axios");
const BordersParser = require("./BordersParser.js");

class BordersGuy {
	constructor() {}
	async getContent() {
		let resp;
		try {
			const response = await axios.get(
				"http://www.promet.si/dc/PROMET.BORDEREVENTS.PP.RSS.SL"
			);
			resp = response;
		} catch (error) {
			console.error(error);
		}
		let parser = new BordersParser();
		const json = await parser.parseFeed(resp.data);
		return json;
	}
}

var getBordersGuy = (function() {
	var instance;

	function createInstance() {
		var object = new BordersGuy();
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

module.exports = getBordersGuy;
