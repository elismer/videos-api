const MongoLib = require('../lib/mongo');
class CategoriesService {
  constructor() {
    this.collection = 'categories';
    this.mongoDB = new MongoLib();
  }

  async getCategories({ categories }) {
    const aggregation = [
      ...(categories ? [{ $match: { name: { $in: categories } } }] : []),
      {
        $lookup: {
          from: 'videos',
          let: { cat: '$id' },
          pipeline: [
            { $match: { $expr: { $in: ['$$cat', '$categories'] } } },
            {
              $project: {
                title: 1,
                description: 1,
                thumb: 1,
                source: 1,
                _id: 0,
              },
            },
          ],
          as: 'videos',
        },
      },
      { $project: { name: 1, _id: 0, videos: 1 } },
    ];
    const categoriesFilter = await this.mongoDB.aggregate({
      collection: this.collection,
      aggregation,
    });
    return categoriesFilter;
  }
}

module.exports = CategoriesService;
