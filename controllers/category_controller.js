var Category = require('../models').category;
var Product = require('../models').product;

module.exports = {
  //A traves de la funcion findAll del modelo se traen todos las categorias y envia una respuesta de los mismos en formato json
  index: function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    Category.findAll().then(categories => res.json(categories));
  },
  //Se implementa filtro de productos por la categoria recibida en los params
  filter: function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    Product.findAll({
      where: {
        category: req.params.wildcard
      }
    }).then(result => res.json(result));
  } 
}