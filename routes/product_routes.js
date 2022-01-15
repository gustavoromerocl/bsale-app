const express = require('express');
let ProductController = require('../controllers/product_controller');
let router = express.Router();

router.route('/api/products')
    .get(ProductController.index);

module.exports = router;