const express = require('express');
const CategoriesService = require('../services/categories');

function categoriesApi(app) {
  const router = express.Router();
  app.use('/api', router);

  const categoriesService = new CategoriesService();

  router.get('/', async function (req, res, next) {
    try {
      const { categories } = req.query;
      const response = await categoriesService.getCategories({ categories });
      res.status(200).json({
        categories: response,
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = categoriesApi;
