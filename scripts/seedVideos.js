const MongoLib = require('../lib/mongo');
const { videosMock } = require('../utils/mocks/videos');

async function seedCategories() {
  try {
    const mongoDB = new MongoLib();

    const promises = videosMock.map(async (video) => {
      await mongoDB.create('videos', video);
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
