const express = require('express');
let router = express.Router();
let CategoryController = require('../controllers/category_controller');

//Se configuran las rutas rest de categorias mediante el controlador y express router
router.route('/api/categories')
  .get(CategoryController.index);

router.route('/api/categories/:wildcard')
  .get(CategoryController.filter);

module.exports = router;