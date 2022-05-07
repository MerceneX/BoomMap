const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

describe('ContentQueryOptions ', () => {
  describe('Testing ContentQueryOptions when constructed with data', () => {
    const ContentQueryOptions = require('../lib/content/general/infrastructure/DAO/ContentQueryOptions');

    it('should provide a query options object when constructed.', async () => {
      const expectedResult = {
        term: '',
        dStart: '2022-05-07T14:15:22.062Z',
        dEnd: '2022-04-09T14:15:22.062Z',
        sort: 'datePublished',
        sortAscDesc: -1,
        limit: 10,
        skip: 0
      };

      const actualResult = new ContentQueryOptions(
        (term = ''),
        (dStart = '2022-05-07T14:15:22.062Z'),
        (dEnd = '2022-04-09T14:15:22.062Z'),
        (sort = 'datePublished'),
        (sortAscDesc = -1),
        (limit = 10),
        (skip = 0)
      );
      console.log(actualResult);

      expect(actualResult).to.contain(expectedResult);
    });

    it('should provide a query options object when constructed without data.', async () => {
      const expectedResult = {
        term: '',
        dStart: '',
        dEnd: '',
        sort: '',
        sortAscDesc: -1,
        limit: 10,
        skip: 0
      };

      const actualResult = new ContentQueryOptions(
        (term = ''),
        (dStart = ''),
        (dEnd = ''),
        (sort = ''),
        sortAscDesc,
        limit,
        skip
      );
      console.log(actualResult);

      expect(actualResult).to.contain(expectedResult);
    });
  });
});
