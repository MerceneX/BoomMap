var parseString = require("xml2js").parseString;

class RoadEventsParser {
	constructor() {}
	async parseFeed(data) {
		let output = {};
		parseString(data, function(err, result) {
			output = {
				title: result.feed.title[0].toString(),
				dateUpdated: result.feed.updated[0].toString(),
				items: []
			};
			result.feed.entry.forEach(item => {
				const temp = {
					title: item.title[0].toString(),
					category: item.category[0].$.term.toString(),
					description: item.content[0].toString(),
					datePublished: item.updated[0].toString()
				};
				output.items.push(temp);
			});
		});
		console.log(`Returning output: ${output}`);
		return output;
	}
}

module.exports = RoadEventsParser;
