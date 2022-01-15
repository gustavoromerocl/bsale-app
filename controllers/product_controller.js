var Product = require('../models').product;

module.exports = {
    index: function(req, res){
        Product.findAll().then(products => res.json(products));
    }
}