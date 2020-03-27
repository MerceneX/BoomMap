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
					title: item.title.toString(),
					description: item.description.toString(),
					link: item.link.toString(),
					datePublished: item.pubDate
				};
				output.items.push(temp);
			});
		});
		return output;
	}
}

module.exports = NewsParser;
