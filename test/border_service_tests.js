const chai = require('chai');
const BordersGuy = require('../lib/content/borders/BordersGuy');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

describe('BordersService ', () => {
  describe('Testing BordersService for various branching paths', () => {
    it('should instantiate itself.', async () => {
      const bordersDAOStub = {};
      const actualResult = new BordersGuy(bordersDAOStub);

      expect(actualResult).to.not.be.null;
    });

    it('should be able to run its primary method, regardless of input.', async () => {
      const bordersDAOStub = {
        getFromDB: async () => {
          return { message: 'ok' };
        },
        updateDB: async () => {}
      };

      const bordersGuy = new BordersGuy(bordersDAOStub);

      const expectedResult = { items: [{ message: 'ok' }] };
      const actualResult = await bordersGuy.getContent();
      expect(actualResult).to.be.deep.equal(expectedResult);
    });

    it('should run updateDB DAO method', async () => {
      const bordersDAOSpy = {
        getFromDB: async () => {},
        updatedDBTimesCalled: 0,
        updateDB: function async() {
          this.updatedDBTimesCalled = 1;
        }
      };

      const bordersGuy = new BordersGuy(bordersDAOSpy);
      await bordersGuy.getContent();
      const expectedResult = 1;
      const actualResult = bordersDAOSpy.updatedDBTimesCalled;
      expect(actualResult).to.be.deep.equal(expectedResult);
    });

    it('should run getFromDB DAO method', async () => {
      const bordersDAOSpy = {
        getFromDBTimesCalled: 0,
        getFromDB: function async() {
          this.getFromDBTimesCalled = 1;
        },
        updateDB: function async() {}
      };

      const bordersGuy = new BordersGuy(bordersDAOSpy);
      await bordersGuy.getContent();

      const expectedResult = 1;
      const actualResult = bordersDAOSpy.getFromDBTimesCalled;
      expect(actualResult).to.be.deep.equal(expectedResult);
    });

    it('should provide a parsed string to UpdateDB DAO method.', async () => {
      const bordersDAOSpy = {
        getFromDB: function async() {},
        receivedParams: null,
        updateDB: function async(receivedParams) {
          this.receivedParams = receivedParams;
        }
      };

      const bordersGuy = new BordersGuy(bordersDAOSpy);
      await bordersGuy.getContent();

      const actualResult = bordersDAOSpy.receivedParams;
      expect(actualResult).to.not.be.null;
      expect(actualResult).to.not.be.undefined;
    });
  });
});
