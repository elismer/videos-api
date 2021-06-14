const { filteredVideosMock } = require('./videos');

const categoriesMock = [
  {
    id: 'b13cc0a7-4a10-4d6a-8190-ffc143336a59',
    name: 'Comedy',
  },
  {
    id: 'f9701a96-f639-4a73-90f9-24ee51362cfc',
    name: 'Blog',
  },
  {
    id: '80aa4a24-0534-448f-b43b-389270e637b9',
    name: 'Kids',
  },
  {
    id: '965253ba-8da8-48de-b724-3fa31baa20b9',
    name: 'Documentary',
  },
  {
    id: '41729d14-c1f2-436c-a736-ae89b9e65437',
    name: 'Music',
  },
  {
    id: '6aafb259-dbce-41b2-bcfe-c32291c8fc42',
    name: 'Games',
  },
];

const categoriesWhitVideos = ({ categories }) => {
  const categoriesFilter = categories
    ? categoriesMock.filter((cat) => categories.includes(cat.name))
    : categoriesMock;
  return categoriesFilter.reduce((acc, curr) => {
    const videos = filteredVideosMock(curr.id);
    acc.push({
      name: curr.name,
      videos: videos.map((video) => {
        const { id, _id, categories, ...info } = video;
        return info;
      }),
    });
    return acc;
  }, []);
};

class CategoriesServiceMock {
  async getCategories({ categories }) {
    return Promise.resolve(categoriesWhitVideos({ categories }));
  }
}

module.exports = {
  categoriesMock,
  categoriesWhitVideos,
  CategoriesServiceMock,
};
