var parseString = require("xml2js").parseString;

class TrafficForecastParser {
	constructor() {}
	async parseFeed(data) {
		let output = {};
		parseString(data, function(err, result) {
			output = result;
			output = {
				title: result.rss.channel[0].title,
				dateUpdated: "now",
				link: result.rss.channel[0].link,
				items: []
			};
			result.rss.channel[0].item.forEach(item => {
				const temp = {
					title: item.title[0],
					description: item.description[0],
					link: item.link[0],
					datePublished: item.pubDate[0]
				};
				output.items.push(temp);
			});
		});
		console.log(`Returning output: ${output}`);
		return output;
	}
}

module.exports = TrafficForecastParser;
