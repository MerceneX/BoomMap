var parseString = require("xml2js").parseString;

class NewsParser {
	constructor() {}
	async parseFeed(data) {
		let output = {};
		parseString(data, function(err, result) {
			output = {
				title: result.feed.title.toString(),
				dateUpdated: result.feed.updated.toString(),
				link: result.feed.link[0].$.href.toString(),
				items: []
			};
			result.feed.entry.forEach(item => {
				const temp = {
					title: item.title[0].toString(),
					description: item.content[0]._.toString(),
					datePublished: item.updated[0].toString()
				};
				output.items.push(temp);
			});
		});
		console.log(output.title);
		return output;
	}
}

module.exports = NewsParser;
