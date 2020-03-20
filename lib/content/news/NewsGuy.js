const axios = require("axios");
const NewsParser = require("./NewsParser.js");

class NewsGuy {
	constructor() {}
	async getContent() {
		let resp;
		try {
			const response = await axios.get(
				"http://promet.si/portal/sl/blog56rss.aspx"
			);
			resp = response;
		} catch (error) {
			console.error(error);
		}
		let parser = new NewsParser();
		const json = await parser.parseFeed(resp.data);
		return json;
	}
}

var getNewsGuy = (function() {
	var instance;

	function createInstance() {
		var object = new NewsGuy();
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

module.exports = getNewsGuy;
