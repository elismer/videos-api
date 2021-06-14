const sinon = require('sinon');

const { categoriesMock } = require('./categories');

const getAllStub = sinon.stub();
getAllStub.withArgs('categories').resolves(categoriesMock);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }
}

module.exports = {
  getAllStub,
  MongoLibMock,
};
