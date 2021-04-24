var parseString = require("xml2js").parseString;

class RoadEventsParser {
	constructor() { }
	async parseFeed(data) {
		let output = {};
		parseString(data, function (err, result) {
			if (err) {
				output.error = "Parsing error; At the xml2js library level.";
				output.errorInput = data;
				return output;
			}

			if (!result) {
				output.error = "Parsing error; No result from parsing.";
				output.errorInput = data;
				return output;
			}

			try {
				output.title = result.feed.title[0].toString();
				output.dateUpdated = result.feed.updated[0].toString();
			} catch (e) {
				output.error = "Parsing error; Attributes not found.";
				output.errorInput = data;
				return output;
			}

			if (!result.feed.entry) {
				output.providedInput = data;
				return output;
			}

			output.items = [];

			result.feed.entry.forEach(item => {
				try {
					let split1 = item.title[0].toString().split(",", 2);
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
					output.items.push({
						error: true,
						data: JSON.stringify(item),
						message: "Parsing error; Entry not parsable."
					})
				}
			});
		});
		return output;
	}
}

module.exports = RoadEventsParser;
