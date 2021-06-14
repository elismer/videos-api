const MongoLib = require('../lib/mongo');
const VideosService = require('./videos');
class CategoriesService {
  constructor() {
    this.collection = 'categories';
    this.mongoDB = new MongoLib();
  }

  async getCategories({ categories }) {
    const query = categories ? { name: { $in: categories } } : {};
    const categoriesFilter = await this.mongoDB.getAll(this.collection, query);
    const videosService = new VideosService();
    const response = await categoriesFilter.reduce(
      async (previousPromise, curr) => {
        const acc = await previousPromise;
        const videos = await videosService.getVideos({ categories: [curr.id] });
        acc.push({
          name: curr.name,
          videos,
        });
        return acc;
      },
      Promise.resolve([])
    );
    return response;
  }
}

module.exports = CategoriesService;
