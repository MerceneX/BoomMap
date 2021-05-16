const chai = require("chai");
const expect = chai.expect;
chai.use(require("chai-as-promised"));

describe("BordersParser ", () => {
  describe("Testing BordersParser parser when parsing data string provided by BordersGuy", () => {
    const BordersParser = require("../lib/content/borders/BordersParser");
    it("should provide parsed road conditions report, when string is in the predicted format", async () => {
      const data =
        '<feed xmlns:kazipot="http://www.promet.si" xmlns="http://www.w3.org/2005/Atom">	<title>Stanje na cestah - Dogodki</title>	<subtitle>Dogodki</subtitle>	<updated>2021-04-25T13:28:41.307Z</updated>	<link href="http://www.promet.si" />	<author>		<name>DARS d.d.</name>		<email>info@promet.si</email>	</author>	<id>urn:uuid:9a35007f-a078-4318-ad31-26189029f68a</id>	<entry>		<title>G1-6 Ilirska Bistrica - Jelšane: Zastoj</title>		<id>tag:promet.si,2000:/_archives/dogodki/510510</id>		<updated>2021-04-25T13:28:28.247Z</updated>		<content>G1-6, mejni prehod Jelšane, Rupa, čakalne dobe: osebna vozila 45 min pri vstopu.</content>		<category term="Zastoj" />	</entry>	<entry>		<title>A2 Obrežje - Brežice: Zastoj</title>		<id>tag:promet.si,2000:/_archives/dogodki/510507</id>		<updated>2021-04-25T13:28:41.307Z</updated>		<content>A2, mejni prehod Obrežje, Bregana, čakalne dobe: osebna vozila 1 h pri vstopu.</content>		<category term="Zastoj" />	</entry>	<entry>		<title>A4 Gruškovje - Podlehnik: Zastoj</title>		<id>tag:promet.si,2000:/_archives/dogodki/510506</id>		<updated>2021-04-25T11:27:33.343Z</updated>		<content>A4, mejni prehod Gruškovje, Macelj, čakalne dobe: osebna vozila 30 min pri vstopu.</content>		<category term="Zastoj" />	</entry></feed>';
      const expectedResult = {
        title: "Stanje na cestah - Dogodki",
        dateUpdated: "2021-04-25T13:28:41.307Z",
        items: [
          {
            title: "Zastoj v Ilirska",
            roadSection: "G1-6",
            location: "Ilirska",
            category: "Zastoj",
            description:
              "G1-6, mejni prehod Jelšane, Rupa, čakalne dobe: osebna vozila 45 min pri vstopu.",
            datePublished: "2021-04-25T13:28:28.247Z",
          },
          {
            title: "Zastoj v Obrežje",
            roadSection: "A2",
            location: "Obrežje",
            category: "Zastoj",
            description:
              "A2, mejni prehod Obrežje, Bregana, čakalne dobe: osebna vozila 1 h pri vstopu.",
            datePublished: "2021-04-25T13:28:41.307Z",
          },
          {
            title: "Zastoj v Gruškovje",
            roadSection: "A4",
            location: "Gruškovje",
            category: "Zastoj",
            description:
              "A4, mejni prehod Gruškovje, Macelj, čakalne dobe: osebna vozila 30 min pri vstopu.",
            datePublished: "2021-04-25T11:27:33.343Z",
          },
        ],
      };

      const actualResult = await new BordersParser().parseFeed(data);

      expect(actualResult).to.deep.equal(expectedResult);
    });

    it("should provide parsed road conditions report with only main attributes, when string is in the predicted format, but no entries are contained", async () => {
      const data =
        '<feed xmlns:kazipot="http://www.promet.si" xmlns="http://www.w3.org/2005/Atom">	<title>Stanje na cestah - Dogodki</title>	<subtitle>Dogodki</subtitle>	<updated>2021-04-25T13:28:41.307Z</updated>	<link href="http://www.promet.si" />	<author>		<name>DARS d.d.</name>		<email>info@promet.si</email>	</author>	<id>urn:uuid:9a35007f-a078-4318-ad31-26189029f68a</id></feed>';
      const expectedResult = {
        title: "Stanje na cestah - Dogodki",
        dateUpdated: "2021-04-25T13:28:41.307Z",
        items: [],
      };

      const actualResult = await new BordersParser().parseFeed(data);

      expect(actualResult).to.deep.equal(expectedResult);
    });

    it("should throw error on recieving an empty string.", async () => {
      const data = "";
      const expectedResult = "Cannot read property 'feed' of null";

      await expect(new BordersParser().parseFeed(data)).to.be.rejectedWith(
        expectedResult
      );
      await expect(new BordersParser().parseFeed(data)).to.be.rejectedWith(
        TypeError
      );
    });
  });
});
