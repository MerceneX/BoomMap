var parseString = require("xml2js").parseString;

class NewsParser {
	constructor() {}
	async parseFeed(data) {
		let output = {};
		parseString(data, function(err, result) {
			output = {
				title: result.feed.title,
				dateUpdated: result.feed.updated,
				link: result.feed.link[0].$.href,
				items: []
			};
			result.feed.entry.forEach(item => {
				const temp = {
					title: item.title[0],
					description: item.content[0]._,
					datePublished: item.updated[0]
				};
				output.items.push(temp);
			});
		});
		console.log(`Returning output: ${output}`);
		return output;
	}
}

module.exports = NewsParser;
