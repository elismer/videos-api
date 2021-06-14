const MongoLib = require('../lib/mongo');

class VideosService {
  constructor() {
    this.collection = 'videos';
    this.mongoDB = new MongoLib();
  }

  async getVideos({ categories }) {
    const query = categories && { categories: { $in: categories } };
    const videos = await this.mongoDB.getAll(this.collection, query, {
      fields: {
        title: 1,
        description: 1,
        thumb: 1,
        source: 1,
        _id: 0,
      },
    });
    return videos || [];
  }
}

module.exports = VideosService;
