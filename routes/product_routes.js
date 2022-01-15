const express = require('express');
let ProductController = require('../controllers/product_controller');
let router = express.Router();

//Se configuran las rutas rest de productos mediante el controlador y express router
router.route('/api/products')
    .get(ProductController.index);

module.exports = router;