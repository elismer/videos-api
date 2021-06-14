const MongoLib = require('../lib/mongo');
const { categoriesMock } = require('../utils/mocks/categories');

async function seedCategories() {
  try {
    const mongoDB = new MongoLib();

    const promises = categoriesMock.map(async (category) => {
      await mongoDB.create('categories', category);
    });

    await Promise.all(promises);
    console.log(`${promises.length} videos have been created succesfully`); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedCategories();
