const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');

const { categoriesWhitVideos } = require('../utils/mocks/categories');

describe('services - categories', function () {
  const CategoriesServices = proxyquire('../services/categories', {
    '../lib/mongo': MongoLibMock,
  });

  const categoriesServices = new CategoriesServices();

  describe('when getCategories method is called', async function () {
    it('should call the getAll MongoLib method', async function () {
      await categoriesServices.getCategories({});
      assert.strictEqual(getAllStub.called, true);
    });

    it('should return an array of categories', async function () {
      const result = await categoriesServices.getCategories({});
      const expected = categoriesWhitVideos({});
      assert.deepStrictEqual(result, expected);
    });
  });
});
