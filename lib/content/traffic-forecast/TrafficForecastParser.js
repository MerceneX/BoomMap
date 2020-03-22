var parseString = require("xml2js").parseString;

class TrafficForecastParser {
	constructor() {}
	async parseFeed(data) {
		let output = {};
		parseString(data, function(err, result) {
			output = {
				title: result.rss.channel[0].title.toString(),
				dateUpdated: "now".toString(),
				link: result.rss.channel[0].link.toString(),
				items: []
			};
			result.rss.channel[0].item.forEach(item => {
				const temp = {
					title: item.title[0].toString(),
					description: item.description[0].toString(),
					link: item.link[0].toString(),
					datePublished: item.pubDate[0].toString()
				};
				output.items.push(temp);
			});
		});
		console.log(`Returning output: ${output}`);
		return output;
	}
}

module.exports = TrafficForecastParser;
