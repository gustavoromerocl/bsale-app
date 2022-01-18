/* https://sequelize.org/v5/manual/models-usage.html */

var Product = require('../models').product;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  //A traves de la funcion findAll del modelo se traen todos los productos y envia una respuesta de los mismos en formato json
  index: function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    Product.findAll().then(products => res.json(products));
  },
  filter: function(req, res){
    res.header("Access-Control-Allow-Origin","*");
    Product.findAll({
      where: {
        name: {
          [Op.like]: `%${req.params.wildcard}%`
        }
      }
    }).then(result => res.json(result));
  }
}