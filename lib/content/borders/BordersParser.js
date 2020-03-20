var parseString = require("xml2js").parseString;

class TrafficForecastParser {
	constructor() {}
	async parseFeed(data) {
		let output = {};
		parseString(data, function(err, result) {
			output = {
				title: result.feed.title,
				dateUpdated: result.feed.updated, // TO-DO: THIS!
				items: []
			};
			result.feed.entry.forEach(item => {
				const temp = {
					title: item.title[0],
					category: item.category[0].$.term,
					description: item.content[0],
					datePublished: item.updated[0]
				};
				output.items.push(temp);
			});
		});
		console.log(`Returning output: ${output}`);
		return output;
	}
}

module.exports = TrafficForecastParser;
