var parseString = require("xml2js").parseString;

class NewsParser {
	constructor() {}
	async parseFeed(data) {
		let output = {};
		parseString(data, function(err, result) {
			output = {
				title: "Novice",
				dateUpdated: "now",
				items: []
			};
			result.rss.channel[0].item.forEach(item => {
				const temp = {
					title: item.title[0].toString(),
					description: item.description[0].toString(),
					link: item.link[0].toString(),
					datePublished: new Date(item.pubDate[0]).toISOString()
				};
				output.items.push(temp);
			});
		});
		return output;
	}
}

module.exports = NewsParser;
