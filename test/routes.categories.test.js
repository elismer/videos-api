const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  CategoriesServiceMock,
  categoriesWhitVideos,
} = require('../utils/mocks/categories.js');
const testServer = require('../utils/testServer');

describe('routes - categories', function () {
  const route = proxyquire('../routes/categories', {
    '../services/categories': CategoriesServiceMock,
  });

  const request = testServer(route);
  describe('GET /', function () {
    it('should respond with status 200', function (done) {
      request.get('/api').expect(200, done);
    });

    it('should respond with the list of categories whit videos', function (done) {
      request.get('/api').end((err, res) => {
        assert.deepStrictEqual(res.body, {
          categories: categoriesWhitVideos({}),
        });
        done();
      });
    });
  });
});
