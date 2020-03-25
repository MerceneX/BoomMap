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
					title: item.title,
					description: item.description,
					link: item.link,
					datePublished: item.pubDate
				};
				output.items.push(temp);
			});
		});
		console.log(output.items.length);
		console.log(`Returning output: ${output}`);
		output.items.forEach(element => {
			console.log(element.title);
		});
		return output;
	}
}

module.exports = NewsParser;
