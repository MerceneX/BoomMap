var parseString = require("xml2js").parseString;

class TrafficForecastParser {
	constructor() { }
	async parseFeed(data) {
		let output = {};
		parseString(data, function (err, result) {
			output = {
				title: result.feed.title.toString(),
				dateUpdated: result.feed.updated.toString(), // TO-DO: THIS!
				items: []
			};
			if (!result.feed.entry) {
				console.log("No new border updates");
				return output;
			}
			result.feed.entry.forEach(item => {
				try {
					let split1 = item.title[0].toString().split(" ", 2);
					let split2 = split1[1].split(":", 2);
					let roadSection = split1[0].trim();
					let location = split2[0].trim();
					let category = item.category[0].$.term.toString();
					const temp = {
						title: `${category} v ${location}`,
						roadSection,
						location,
						category,
						description: item.content[0].toString(),
						datePublished: item.updated[0].toString()
					};
					output.items.push(temp);
				}
				catch (e) {
					console.log(e);
				}
			});
		});
		return output;
	}
}

module.exports = TrafficForecastParser;
